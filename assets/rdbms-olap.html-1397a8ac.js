const e=JSON.parse('{"key":"v-65edb701","path":"/posts/rdbms-olap.html","title":"RDBMS vs OLAP","lang":"es-ES","frontmatter":{"title":"RDBMS vs OLAP","cover":"/assets/images/cover1.jpg","icon":"file","order":1,"author":"Leandro Gutierrez","date":"2023-11-18T00:00:00.000Z","category":["Bases de Datos"],"tag":["Bases de Datos","Ingenieria de datos","Analítica"],"sticky":true,"star":true,"disableCopy":true,"description":"Imaginemos por un momento que tenemos la dificil tarea de disponibilizar métricas de efectividad de un nuevo feature desplegado. Dimensionemos (imaginando) la magnitud de la solución: supongamos a modo de ejemplo 1 millon de usuarios diarios, a los cuales a un X porcentaje le exponemos la nueva funcionalidad, y con la cual se interacciona al menos 4 veces durante la sesion diaria. Si nuestro test A/B determina una distribución 50/50, una de las mitades no logueará ninguna actividad mientras que de la otra al menos obtendremos 4 registros al dia, ergo 60M de logs al mes. Al finalizar el periodo de nuestro experimento, supongamos luego de 3 meses, estaremos procesando 180M de filas. Tarea no despreciable.","head":[["meta",{"property":"og:url","content":"https://leandrogutierrez148.github.io/posts/rdbms-olap.html"}],["meta",{"property":"og:title","content":"RDBMS vs OLAP"}],["meta",{"property":"og:description","content":"Imaginemos por un momento que tenemos la dificil tarea de disponibilizar métricas de efectividad de un nuevo feature desplegado. Dimensionemos (imaginando) la magnitud de la solución: supongamos a modo de ejemplo 1 millon de usuarios diarios, a los cuales a un X porcentaje le exponemos la nueva funcionalidad, y con la cual se interacciona al menos 4 veces durante la sesion diaria. Si nuestro test A/B determina una distribución 50/50, una de las mitades no logueará ninguna actividad mientras que de la otra al menos obtendremos 4 registros al dia, ergo 60M de logs al mes. Al finalizar el periodo de nuestro experimento, supongamos luego de 3 meses, estaremos procesando 180M de filas. Tarea no despreciable."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://leandrogutierrez148.github.io/assets/images/cover1.jpg"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"og:updated_time","content":"2024-04-08T10:58:48.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"RDBMS vs OLAP"}],["meta",{"property":"article:author","content":"Leandro Gutierrez"}],["meta",{"property":"article:tag","content":"Bases de Datos"}],["meta",{"property":"article:tag","content":"Ingenieria de datos"}],["meta",{"property":"article:tag","content":"Analítica"}],["meta",{"property":"article:published_time","content":"2023-11-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-08T10:58:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RDBMS vs OLAP\\",\\"image\\":[\\"https://leandrogutierrez148.github.io/assets/images/cover1.jpg\\"],\\"datePublished\\":\\"2023-11-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-08T10:58:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Leandro Gutierrez\\"}]}"]]},"headers":[{"level":2,"title":"RDBMS vs OLAP","slug":"rdbms-vs-olap","link":"#rdbms-vs-olap","children":[]},{"level":2,"title":"Column-Oriented vs Row-Oriented","slug":"column-oriented-vs-row-oriented","link":"#column-oriented-vs-row-oriented","children":[]},{"level":2,"title":"Clickhouse","slug":"clickhouse","link":"#clickhouse","children":[{"level":3,"title":"ENGINE MergeTree","slug":"engine-mergetree","link":"#engine-mergetree","children":[]},{"level":3,"title":"ENGINE Kafka","slug":"engine-kafka","link":"#engine-kafka","children":[]},{"level":3,"title":"MaterializedViews","slug":"materializedviews","link":"#materializedviews","children":[]}]}],"git":{"createdTime":1712573928000,"updatedTime":1712573928000,"contributors":[{"name":"Leandro Gutierrez","email":"lgutierrez@onebittech.com","commits":1}]},"readingTime":{"minutes":4.73,"words":1420},"filePathRelative":"posts/rdbms-olap.md","localizedDate":"18 de noviembre de 2023","excerpt":"<p>Imaginemos por un momento que tenemos la dificil tarea de disponibilizar métricas de efectividad de un nuevo feature desplegado. Dimensionemos (imaginando) la magnitud de la solución: supongamos a modo de ejemplo 1 millon de usuarios diarios, a los cuales a un X porcentaje le exponemos la nueva funcionalidad, y con la cual se interacciona al menos 4 veces durante la sesion diaria. Si nuestro test A/B determina una distribución 50/50, una de las mitades no logueará ninguna actividad mientras que de la otra al menos obtendremos 4 registros al dia, ergo 60M de logs al mes.</p>\\n<p>Al finalizar el periodo de nuestro experimento, supongamos luego de 3 meses, estaremos procesando 180M de filas. Tarea no despreciable.</p>\\n","copyright":{"author":"Leandro Gutierrez"},"autoDesc":true}');export{e as data};
