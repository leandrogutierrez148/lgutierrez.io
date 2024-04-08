---
# This is the title of the article
title: 'RDBMS vs OLAP'
# You can customize cover image
cover: /assets/images/cover1.jpg
# This is the icon of the page
icon: file
# This control sidebar order
order: 1
# Set author
author: Leandro Gutierrez
# Set writing time
date: 2024-04-01
# A page can have multiple categories
category:
  - Bases de Datos
# A page can have multiple tags
tag:
  - Bases de Datos
  - Ingenieria de datos
  - Analítica
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true

disableCopy: true
---

Imaginemos por un momento que tenemos la dificil tarea de disponibilizar métricas de efectividad de un nuevo feature desplegado. Dimensionemos (imaginando) la magnitud de la solución: supongamos a modo de ejemplo 1 millon de usuarios diarios, a los cuales a un X porcentaje le exponemos la nueva funcionalidad, y con la cual se interacciona al menos 4 veces durante la sesion diaria. Si nuestro test A/B determina una distribución 50/50, una de las mitades no logueará ninguna actividad mientras que de la otra al menos obtendremos 4 registros al dia, ergo 60M de logs al mes. 

Al finalizar el periodo de nuestro experimento, supongamos luego de 3 meses, estaremos procesando 180M de filas. Tarea no despreciable.
<!-- more -->

## RDBMS vs OLAP
Las bases de datos relacionales (RDBMS) están diseñadas para el procesamiento de transacciones, que es el conjunto de operaciones (INSERT, UPDATE, DELETE, SELECT) que se realizan para completar una acción o híto en el negocio. Las RDBMS son muy eficientes en el procesamiento de transacciones, pero no están optimizadas para el análisis de grandes volúmenes de datos.

Como subconjunto de las Base de Datos Transaccionales (TDD por sus siglas en inglés - Transacional Due Diligense), las RDBMS ofrecen:
- Transacciones ACID:  Una transacción es un grupo de operaciones de lectura y escritura en una base de datos que solo tiene éxito si todas las operaciones dentro de ella tienen éxito. Las transacciones pueden afectar a un solo registro o a varios registros. Las TDD garantizan que las transacciones se completen de manera consistente, incluso si se producen errores. 
  - Atomicidad
  - Consistencia 
  - Aislamiento 
  - Durabilidad
- El inconveniente de utilizar una transacción es que la base de datos tiene que "bloquear" los recursos involucrados para evitar que las escrituras concurrentes interfieran entre sí. Esto significa que otros clientes que intenten escribir datos podrían quedarse esperando a que la transacción se complete, lo que afectaría a la latencia de la aplicación y, en última instancia, a la experiencia del usuario.
- Integridad referencial: las TDD permiten establecer relaciones entre tablas, lo que ayuda a garantizar la integridad de los datos. Esto es importante para aplicaciones que requieren datos consistentes.
- Eficiencia para el procesamiento de transacciones: están optimizadas para operar transacciones. Esto es importante para aplicaciones que requieren un alto rendimiento transaccional.

## Column-Oriented vs Row-Oriented
- En un sistema de gestión de bases de datos orientado a filas, todos los datos de una fila se almacenan físicamente uno al lado del otro.
![row-oriented.gif](/assets/images/row-oriented.gif)
- En un sistema de gestión de bases de datos orientado a columnas, todos los valores de una columna son almacenados de manera contigua.
![column-oriented.gif](/assets/images/column-oriented.gif)

### [WIP]