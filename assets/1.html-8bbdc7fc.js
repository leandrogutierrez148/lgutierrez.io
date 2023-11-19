const e=JSON.parse('{"key":"v-14f772bb","path":"/es/posts/clickhouse/1.html","title":"Construyendo un pipeline de datos simple: Sincronizando MySQL con Clickhouse utilizando Kafka","lang":"es","frontmatter":{"title":"Construyendo un pipeline de datos simple: Sincronizando MySQL con Clickhouse utilizando Kafka","cover":"/assets/images/cover1.jpg","icon":"file","order":1,"author":"Leandro Gutierrez","date":"2023-11-18T00:00:00.000Z","category":["Bases de Datos"],"tag":["Bases de Datos","Ingenieria de datos","Analítica"],"sticky":true,"star":true,"description":"Los motores de reportes son una pieza fundamental de cualquier sistema de información. Permiten a los usuarios consultar y analizar datos de forma rápida y sencilla, lo que les ayuda a tomar mejores decisiones. En este post vamos a ver cómo sincronizar una base de datos transaccional MySQL con un motor columnar orientado a la analítica, ClickHouse. Este enfoque nos permitirá crear un motor de reportes escalable y eficiente, capaz de manejar grandes volúmenes de datos.","head":[["meta",{"property":"og:url","content":"https://leandrogutierrez148.github.io/es/posts/clickhouse/1.html"}],["meta",{"property":"og:site_name","content":"Leandro Gutierrez"}],["meta",{"property":"og:title","content":"Construyendo un pipeline de datos simple: Sincronizando MySQL con Clickhouse utilizando Kafka"}],["meta",{"property":"og:description","content":"Los motores de reportes son una pieza fundamental de cualquier sistema de información. Permiten a los usuarios consultar y analizar datos de forma rápida y sencilla, lo que les ayuda a tomar mejores decisiones. En este post vamos a ver cómo sincronizar una base de datos transaccional MySQL con un motor columnar orientado a la analítica, ClickHouse. Este enfoque nos permitirá crear un motor de reportes escalable y eficiente, capaz de manejar grandes volúmenes de datos."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://leandrogutierrez148.github.io/assets/images/cover1.jpg"}],["meta",{"property":"og:locale","content":"es"}],["meta",{"property":"og:updated_time","content":"2023-11-19T23:11:31.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Construyendo un pipeline de datos simple: Sincronizando MySQL con Clickhouse utilizando Kafka"}],["meta",{"property":"article:author","content":"Leandro Gutierrez"}],["meta",{"property":"article:tag","content":"Bases de Datos"}],["meta",{"property":"article:tag","content":"Ingenieria de datos"}],["meta",{"property":"article:tag","content":"Analítica"}],["meta",{"property":"article:published_time","content":"2023-11-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-19T23:11:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Construyendo un pipeline de datos simple: Sincronizando MySQL con Clickhouse utilizando Kafka\\",\\"image\\":[\\"https://leandrogutierrez148.github.io/assets/images/cover1.jpg\\"],\\"datePublished\\":\\"2023-11-18T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-19T23:11:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Leandro Gutierrez\\"}]}"]]},"headers":[{"level":2,"title":"\\"Necesitamos Big Data\\"","slug":"necesitamos-big-data","link":"#necesitamos-big-data","children":[]},{"level":2,"title":"RDBMS vs OLAP","slug":"rdbms-vs-olap","link":"#rdbms-vs-olap","children":[]},{"level":2,"title":"Column-Oriented vs Row-Oriented","slug":"column-oriented-vs-row-oriented","link":"#column-oriented-vs-row-oriented","children":[]},{"level":2,"title":"Clickhouse","slug":"clickhouse","link":"#clickhouse","children":[{"level":3,"title":"ENGINE MergeTree","slug":"engine-mergetree","link":"#engine-mergetree","children":[]},{"level":3,"title":"ENGINE Kafka","slug":"engine-kafka","link":"#engine-kafka","children":[]},{"level":3,"title":"MaterializedViews","slug":"materializedviews","link":"#materializedviews","children":[]}]}],"git":{"createdTime":1700331047000,"updatedTime":1700435491000,"contributors":[{"name":"Leandro Gutierrez","email":"lgutierrez@onebittech.com","commits":3}]},"readingTime":{"minutes":5.04,"words":1511},"filePathRelative":"es/posts/clickhouse/1.md","localizedDate":"18 de noviembre de 2023","excerpt":"<p>Los motores de reportes son una pieza fundamental de cualquier sistema de información. Permiten a los usuarios consultar y analizar datos de forma rápida y sencilla, lo que les ayuda a tomar mejores decisiones.</p>\\n<p>En este post vamos a ver cómo sincronizar una base de datos transaccional MySQL con un motor columnar orientado a la analítica, ClickHouse. Este enfoque nos permitirá crear un motor de reportes escalable y eficiente, capaz de manejar grandes volúmenes de datos.</p>\\n","autoDesc":true}');export{e as data};
