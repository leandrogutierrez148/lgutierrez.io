---
# This is the title of the article
title: 'Aire Fresco con Airflow: adiós Cron'
# You can customize cover image
cover: /assets/images/airflow.webp
# This is the icon of the page
icon: file
# This control sidebar order
order: 4
# Set author
author: Leandro Gutierrez
# Set writing time
date: 2024-04-27
# A page can have multiple categories
category:
  - BigData
# A page can have multiple tags
tag:
  - Ingenieria de datos
  - Airflow
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true

disableCopy: true
---
Cuando se trata de agendar tareas programadas quizás lo primero que llega a nuestra mente es el famoso servicio de sistemas Unix **Cron**, el cual periodicamente y de manera desatendida despierta para ejecutar las tareas que le hayan sido programadas. Los tiempos modernos arribaron y las necesidades cada vez mayores de facilitar el desarrollo, despliegue y monitoreo de nuestras tareas arribaron con ellos. Hoy daremos un vistazo a Airflow y sus conceptos clave.
<!-- more -->

## Airflow
Airflow, es una plataforma open-source que permite desarrollar, agendar y monitorizar tareas programadas, o como ellos mismos se denominan **un orquestador de tareas programadas**. Desarrollado en Python, Airflow provee un framework para crear nuestras propias cargas de trabajo (**Workflows**), además de una amplia gama de integraciones de terceras partes, algunos oficiales y otros vastamente aceptados por la comunidad, resuelven la mayoría de los casos de uso común.

Al ser un framework de programación cuenta con las siguientes ventajas:
- Los **Workflows** pueden ser versionados y controlados con herramientas como Git, lo cual permite tener control de cada versión desplegada.
- Los **Workflows** pueden ser trabajados de manera colaborativa en simultaneo.
- Se pueden escribir **Tests** para validaciones.
- Los componentes son extensibles y podemos desarrollar nuestra propias implementaciones.

![airflow-view.png](/assets/images/airflow-view.png)

### Arquitectura
Su arquitecutra distribuida comprende multiples componentes:
- **Scheduler**: es el encargado de lanzar los workflows programados y de coordinar cada una de las tareas que se deben ejecutar.
- **WebUI**: interfaz de monitoreo, lanzamineto y debugueo de nuestros DAGs.
- **Worker**: es quien efectivamente realiza las tareas provistas por el Scheduler. En instalaciones básicas es parte del Scheduler.
- **DAGs folder**: carpeta leida por el Scheduler para levantar y programar las tareas.
- **Metadata database**: en ella Airflow almacena los estados de las ejecuciones.

![airflow-arch.png](/assets/images/airflow-arch.png)

### Workflow
El concepto **Workflow** es modelado como un **DAG** (Grafo Asiclico Direccionado), es decir no forma bucles y su final de ejecución está garantizado. Cada nodo del grafo se representa una tarea a realizar. Estos **Tasks** pueden ser componentes estandares llamados **Operators**, como un HttpApiCliente o BashExecutor; o bien pueden ser funciones Python con la flexibilidad casi infinita que eso implica. 

Un **DAG** define la dependencia entre nuestros **Tasks**, y define la secuencia de ejecución de los mismos. Mientras que un **Task** define que se está haciendo.

![airflow-dag.png](/assets/images/airflow-dag.png)

### Declarando nuestro DAG
Existen múltiples maneras de declarar nuestro DAG:
- **Context Manager**, el cual inyectará el DAG a cualquiera de las tareas definidas dentro del contexto:
```python
import datetime

 from airflow import DAG
 from airflow.operators.empty import EmptyOperator

 with DAG(
     dag_id="dag_id",
     start_date=datetime.datetime(2021, 1, 1),
     schedule="@daily",
 ):
     EmptyOperator(task_id="task")
```
- **Constructor standard**, pasando el DAG a cada operador utilizado:
```python
 import datetime

 from airflow import DAG
 from airflow.operators.empty import EmptyOperator

 my_dag = DAG(
     dag_id="dag_id",
     start_date=datetime.datetime(2021, 1, 1),
     schedule="@daily",
 )
 EmptyOperator(task_id="task", dag=my_dag)
```
- **@dag decorator**, el cual convierte una funcion en un DAG:
```python
import datetime

from airflow.decorators import dag
from airflow.operators.empty import EmptyOperator

@dag(start_date=datetime.datetime(2021, 1, 1), schedule="@daily")
def generate_dag():
    EmptyOperator(task_id="task")


generate_dag()
```

### Tasks
Asimismo existen tres formas de definir un **Task**:
- **Operators**: casos de uso común que se standarizaron para facilitar nuestro trabajo. Muchos de ellos vienen integrados otros son desarrollados por terceras partes y deben ser instalados a mano. Ejemplos:
  - HttpOperator
  - MySqlOperator
  - PostgresOperator
  - SlackAPIOperator
- **Sensors**: son una subclase especial de **Operators** que funcionan como hooks.
- **Taskflow API**: funciones Python decoradas con *@Task* decorator

Tras bambalinas todas son subclases de *BaseOperator* y los conceptos de **Task** y **Operator** son en cierta manera intercambiables.

Por ejemplo si quisieramos checkear el estado de una API podriamos utilizar un SimpleHttpOperator, componente base distribuido por la plataforma, o podemos desarrollar nuestra propia función en Python en la cual , ambos caminos son validos.

```python
with DAG(
    dag_id='check_api',
    start_date=datetime.datetime(2021, 1, 1),
    schedule_interval='@daily',
    max_active_runs=1,
    catchup=False
) as dag:
    task_http_sensor_check = SimpleHttpOperator(
        task_id="http_sensor_check",
        http_conn_id="api-conn",
        endpoint="/ping",
        method="GET",
        dag=dag,
    )

    task_http_sensor_check
```

```python
@dag(
    dag_id='check_api',
    start_date=datetime.datetime(2021, 1, 1),
    schedule_interval='@daily',
    max_active_runs=1,
    catchup=False
)
def check_api():
    @task(retries=3, retry_delay=timedelta(seconds=10), retry_exponential_backoff=True)
    def check_api_task():
        conn = Connection.get_connection_from_secrets("api-conn")
        endpoint = '/ping'

        url = conn.get_uri() + endpoint

        r = requests.get(url)
        if r.ok:
            msg = 'Success'
            logging.info(msg)
            return r.text
        else:
            msg = 'Error'
            logging.warning(msg)
            raise AirflowException(msg)

    check_api_task()


check_api()
```
### Control de flujo
El flujo de ejecución de nuestro **DAG** se definen con dependencias upstreams y downstrems. Conviven hoy dos maneras de definir estas dependencias, la primera mediante el uso de los operadores **>>** y **<<**, y la segunda con los metodos **set_upstream** y **set_downstream**.
```python
first_task >> [second_task, third_task]
third_task << fourth_task
```
O bien: 
```python
first_task.set_downstream([second_task, third_task])
third_task.set_upstream(fourth_task)
```

Estas dependencias representan las *aristas* en nuestros grafos y definen el orden en que Airflow ejecutará las tareas. Por defecto un Task esperará que todos sus *upstreams* se ejecuten correctamente antes de correr (este comportamiento puede modificarse según necesitemos).

Un punto importante en Airflow es que no es un sistema de ETL, por lo que no está diseñado para intercambiar grandes volumenes de datos entre tareas. Esto debe ser tenido en cuenta al momento de programar nuestros DAGs.

Para intercambiar información entre nuestras Tasks se emplean tres metodos:
- XComs (Cross-communications): mecanismo por el cual nuestras tareas envian y reciben pequeñas bloques de información.
- Servicios de almacenamiento externo: es la mejor manera de intercambiar grandes volumenes de información, cada tarea debe encargarse de pullear y pushear la información que desea transferir o procesar.
- TaskFlow: la API automaticamente inyecta la salida de nuestro Task a la siguiente etapa, haciendo uso de XComs implícitos. De nuevo no es recomendado para grandes volumenes de datos.

### Casos de uso
Airflow está pensado para tareas **batch** asíncronas
Los casos de uso mas común son:
- Checkeos keep-alive
- Controles de calidad de datos
- Pre agregaciones
- Accionar contra un servicio
