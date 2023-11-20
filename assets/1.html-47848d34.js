const e=JSON.parse(`{"key":"v-3a3a158c","path":"/posts/clikchouse/1.html","title":"Building a real-time data pipeline: Syncing MySQL and ClickHouse with Kafka","lang":"en-US","frontmatter":{"title":"Building a real-time data pipeline: Syncing MySQL and ClickHouse with Kafka","cover":"/assets/images/cover1.jpg","icon":"file","order":1,"author":"Leandro Gutierrez","date":"2023-11-18T00:00:00.000Z","category":["Databases"],"tag":["Databases","Engineering","Analytics"],"sticky":true,"star":true,"disableCopy":true,"description":"Every day, we see the amount of information we store, traffic, and process growing. Let's imagine for a moment that we have the challenging task of providing metrics for the effectiveness of a new feature on the frontend of one of the most widely used audiovisual playback sites. This feature not only impacts the development team but also concerns a set of neighboring teams in the constellation of involved services. In this set, there's the team in charge of pure computing – that's us. Let's try for a moment to grasp the magnitude of the problem/solution: imagine 1 million daily users, to whom we expose the new functionality at a certain percentage (X), interacting with it at least 4 times during the session. If our A/B test determines a 50/50 distribution, half of them will not log any activity, while the other half will generate at least 4 logs per day. That's 2 million logs per day, hence 60 million logs per month. Now, imagine that at the end of the experimental period, after 3 months, we want to validate the effectiveness of our feature – we'll be processing 180 million rows. In the best case, each row will contain all the denormalized information ready to be molded; in the worst case, the information will be normalized, and it will be our job to enrich it beforehand. It's not always possible to foresee the exponential growth in the production of new information in time, let alone the need to form dedicated teams for obtaining, cleaning, and processing it. Usually, the natural evolutionary inertia in terms of the lifespan of a software project leads us to critical points where it's necessary to rethink how we approach this issue. All of this is better contextualized, especially for those who witnessed the 'cracking' of the traditional monolithic approach and were part of the shift to scalable distributed services. Now that everything is distributed, where do we bring it together to process it? Meanwhile, from the other office, they say, 'We need to access more information, faster' (do we really need it?). Depending on the type of solution the software is offering, both its architecture and infrastructure may have evolved over time. In general (not always), one starts with a relational database, which is usually simple to understand, set up, and manipulate; and is perhaps the first point of contact that a programmer typically encounters when delving into the world of software. It's worth mentioning that any solution requiring transaction processing usually stores its information in a transactional database, such as MySQL, MariaDB, SQL Server, or Oracle. Nowadays, it might sound strange to log user interaction with the frontend in a transactional database, but as an illustrative example of a real-life pipeline, let's assume that our project starts with a MySQL Server, and each interaction is logged in this DBMS. As we mentioned in our example, in the worst case, we'll be analyzing the performance of our feature quarterly with around 180 million rows. If we are in a general evolutionary process, the company probably realized the need to 'split' read and write in the relational database a long time ago. There likely exists a hot replica through one of the standard synchronization mechanisms offered by the engine. However, when the time comes to process 180 million records and not only this query but also the normal flow of inserts, updates, and selects are taking place, we probably understand that we need to move to a somewhat more complex solution to make life easier for decision-makers.","head":[["meta",{"property":"og:url","content":"https://leandrogutierrez148.github.io/posts/clikchouse/1.html"}],["meta",{"property":"og:site_name","content":"Leandro Gutierrez"}],["meta",{"property":"og:title","content":"Building a real-time data pipeline: Syncing MySQL and ClickHouse with Kafka"}],["meta",{"property":"og:description","content":"Every day, we see the amount of information we store, traffic, and process growing. Let's imagine for a moment that we have the challenging task of providing metrics for the effectiveness of a new feature on the frontend of one of the most widely used audiovisual playback sites. This feature not only impacts the development team but also concerns a set of neighboring teams in the constellation of involved services. In this set, there's the team in charge of pure computing – that's us. Let's try for a moment to grasp the magnitude of the problem/solution: imagine 1 million daily users, to whom we expose the new functionality at a certain percentage (X), interacting with it at least 4 times during the session. If our A/B test determines a 50/50 distribution, half of them will not log any activity, while the other half will generate at least 4 logs per day. That's 2 million logs per day, hence 60 million logs per month. Now, imagine that at the end of the experimental period, after 3 months, we want to validate the effectiveness of our feature – we'll be processing 180 million rows. In the best case, each row will contain all the denormalized information ready to be molded; in the worst case, the information will be normalized, and it will be our job to enrich it beforehand. It's not always possible to foresee the exponential growth in the production of new information in time, let alone the need to form dedicated teams for obtaining, cleaning, and processing it. Usually, the natural evolutionary inertia in terms of the lifespan of a software project leads us to critical points where it's necessary to rethink how we approach this issue. All of this is better contextualized, especially for those who witnessed the 'cracking' of the traditional monolithic approach and were part of the shift to scalable distributed services. Now that everything is distributed, where do we bring it together to process it? Meanwhile, from the other office, they say, 'We need to access more information, faster' (do we really need it?). Depending on the type of solution the software is offering, both its architecture and infrastructure may have evolved over time. In general (not always), one starts with a relational database, which is usually simple to understand, set up, and manipulate; and is perhaps the first point of contact that a programmer typically encounters when delving into the world of software. It's worth mentioning that any solution requiring transaction processing usually stores its information in a transactional database, such as MySQL, MariaDB, SQL Server, or Oracle. Nowadays, it might sound strange to log user interaction with the frontend in a transactional database, but as an illustrative example of a real-life pipeline, let's assume that our project starts with a MySQL Server, and each interaction is logged in this DBMS. As we mentioned in our example, in the worst case, we'll be analyzing the performance of our feature quarterly with around 180 million rows. If we are in a general evolutionary process, the company probably realized the need to 'split' read and write in the relational database a long time ago. There likely exists a hot replica through one of the standard synchronization mechanisms offered by the engine. However, when the time comes to process 180 million records and not only this query but also the normal flow of inserts, updates, and selects are taking place, we probably understand that we need to move to a somewhat more complex solution to make life easier for decision-makers."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://leandrogutierrez148.github.io/assets/images/cover1.jpg"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-11-20T11:04:07.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Building a real-time data pipeline: Syncing MySQL and ClickHouse with Kafka"}],["meta",{"property":"article:author","content":"Leandro Gutierrez"}],["meta",{"property":"article:tag","content":"Databases"}],["meta",{"property":"article:tag","content":"Engineering"}],["meta",{"property":"article:tag","content":"Analytics"}],["meta",{"property":"article:published_time","content":"2023-11-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-20T11:04:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Building a real-time data pipeline: Syncing MySQL and ClickHouse with Kafka\\",\\"image\\":[\\"https://leandrogutierrez148.github.io/assets/images/cover1.jpg\\"],\\"datePublished\\":\\"2023-11-18T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-20T11:04:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Leandro Gutierrez\\"}]}"]]},"headers":[{"level":2,"title":"\\"Big Data, that's it! Right?\\"","slug":"big-data-that-s-it-right","link":"#big-data-that-s-it-right","children":[{"level":3,"title":"Column-Oriented vs Row-Oriented","slug":"column-oriented-vs-row-oriented","link":"#column-oriented-vs-row-oriented","children":[]}]},{"level":2,"title":"Clickhouse","slug":"clickhouse","link":"#clickhouse","children":[{"level":3,"title":"ENGINE MergeTree","slug":"engine-mergetree","link":"#engine-mergetree","children":[]},{"level":3,"title":"ENGINE Kafka","slug":"engine-kafka","link":"#engine-kafka","children":[]},{"level":3,"title":"MaterializedViews","slug":"materializedviews","link":"#materializedviews","children":[]}]}],"git":{"createdTime":1700331047000,"updatedTime":1700478247000,"contributors":[{"name":"Leandro Gutierrez","email":"lgutierrez@onebittech.com","commits":4}]},"readingTime":{"minutes":6,"words":1801},"filePathRelative":"posts/clikchouse/1.md","localizedDate":"November 18, 2023","excerpt":"<p>Every day, we see the amount of information we store, traffic, and process growing. Let's imagine for a moment that we have the challenging task of providing metrics for the effectiveness of a new feature on the frontend of one of the most widely used audiovisual playback sites. This feature not only impacts the development team but also concerns a set of neighboring teams in the constellation of involved services. In this set, there's the team in charge of pure computing – that's us. Let's try for a moment to grasp the magnitude of the problem/solution: imagine 1 million daily users, to whom we expose the new functionality at a certain percentage (X), interacting with it at least 4 times during the session. If our A/B test determines a 50/50 distribution, half of them will not log any activity, while the other half will generate at least 4 logs per day. That's 2 million logs per day, hence 60 million logs per month. Now, imagine that at the end of the experimental period, after 3 months, we want to validate the effectiveness of our feature – we'll be processing 180 million rows. In the best case, each row will contain all the denormalized information ready to be molded; in the worst case, the information will be normalized, and it will be our job to enrich it beforehand. It's not always possible to foresee the exponential growth in the production of new information in time, let alone the need to form dedicated teams for obtaining, cleaning, and processing it. Usually, the natural evolutionary inertia in terms of the lifespan of a software project leads us to critical points where it's necessary to rethink how we approach this issue. All of this is better contextualized, especially for those who witnessed the 'cracking' of the traditional monolithic approach and were part of the shift to scalable distributed services. Now that everything is distributed, where do we bring it together to process it? Meanwhile, from the other office, they say, 'We need to access more information, faster' (do we really need it?).</p>\\n<p>Depending on the type of solution the software is offering, both its architecture and infrastructure may have evolved over time. In general (not always), one starts with a relational database, which is usually simple to understand, set up, and manipulate; and is perhaps the first point of contact that a programmer typically encounters when delving into the world of software. It's worth mentioning that any solution requiring transaction processing usually stores its information in a transactional database, such as MySQL, MariaDB, SQL Server, or Oracle. Nowadays, it might sound strange to log user interaction with the frontend in a transactional database, but as an illustrative example of a real-life pipeline, let's assume that our project starts with a MySQL Server, and each interaction is logged in this DBMS. As we mentioned in our example, in the worst case, we'll be analyzing the performance of our feature quarterly with around 180 million rows. If we are in a general evolutionary process, the company probably realized the need to 'split' read and write in the relational database a long time ago. There likely exists a hot replica through one of the standard synchronization mechanisms offered by the engine. However, when the time comes to process 180 million records and not only this query but also the normal flow of inserts, updates, and selects are taking place, we probably understand that we need to move to a somewhat more complex solution to make life easier for decision-makers.</p>\\n","copyright":{"author":"Leandro Gutierrez"},"autoDesc":true}`);export{e as data};
