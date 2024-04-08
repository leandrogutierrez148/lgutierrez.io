import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as i,d as s,a,f as d}from"./app-49cf1cdd.js";const l={},r=a("p",null,"En este post vamos a ver una de las opciones de sincronización mas utilizadas de momento, haremos uso del CDC de nuestra base de datos transaccional MySQL para publicar cada una de sus entradas en nuestro stack de Kafka.",-1),v=d(`<h2 id="introduccion" tabindex="-1"><a class="header-anchor" href="#introduccion" aria-hidden="true">#</a> Introduccion</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>version: &#39;3&#39;
services:
  mysql:
    image: arm64v8/mysql:8
    restart: always
    platform: linux/arm64
    command: --log-bin=binlog --binlog-format=ROW
    environment:
      MYSQL_ROOT_PASSWORD: mypassword
      MYSQL_DATABASE: mydatabase
    volumes:
      - ./mysql/data:/var/lib/mysql
    ports:
      - &quot;3306:3306&quot;

  zookeeper:
    image: wurstmeister/zookeeper
    ports:
      - &quot;2181:2181&quot;
      
  kafka:
    image: wurstmeister/kafka
    ports:
      - &quot;9092:9092&quot;
    environment:
      KAFKA_ADVERTISED_HOST_NAME: kafka
      KAFKA_ADVERTISED_PORT: 9092
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_LOG_DIRS: /kafka/logs
      KAFKA_BROKER_ID: 1
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - ./kafka/data/:/kafka

  connect:
    image: debezium/connect:2.2
    restart: always
    depends_on:
      - kafka
      - mysql
    environment:
      BOOTSTRAP_SERVERS: &#39;kafka:9092&#39;
      GROUP_ID: debezium-group
      CONFIG_STORAGE_TOPIC: debezium-connect-configs
      OFFSET_STORAGE_TOPIC: debezium-connect-offsets
      STATUS_STORAGE_TOPIC: debezium-connect-statuses
      PLUGIN_PATH: &#39;/kafka/connect&#39;
      CONNECT_KEY_CONVERTER: &#39;org.apache.kafka.connect.json.JsonConverter&#39;
      CONNECT_VALUE_CONVERTER: &#39;org.apache.kafka.connect.json.JsonConverter&#39;
      CONNECT_INTERNAL_KEY_CONVERTER: &#39;org.apache.kafka.connect.json.JsonConverter&#39;
      CONNECT_INTERNAL_VALUE_CONVERTER: &#39;org.apache.kafka.connect.json.JsonConverter&#39;
      CONNECT_REST_ADVERTISED_HOST_NAME: connect
      CONNECT_REST_PORT: 8083
      CONNECT_LOG4J_ROOT_LOGLEVEL: &#39;INFO&#39;
      CONNECT_PLUGIN_PATH: &#39;/usr/share/java,/usr/share/confluent-hub-components&#39;
    volumes:
      - ./debezium/config:/kafka/configs
      - ./debezium/plugins:/usr/share/confluent-hub-components
    ports:
      - 8083:8083

  akhq:
    image: tchiotludo/akhq
    restart: unless-stopped
    environment:
      AKHQ_CONFIGURATION: |
        akhq:
          connections:
            docker-kafka-server:
              properties:
                bootstrap.servers: &quot;kafka:9092&quot;
              connect:
                - name: &quot;connect&quot;
                  url: &quot;http://connect:8083&quot;
    ports:
      - 8081:8080
    links:
      - kafka
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CREATE TABLE IF NOT EXISTS transactions (
    transaction_id INT NOT NULL PRIMARY KEY,
    created_at TIMESTAMP NOT NULL,
    amount DECIMAL(12,2) NOT NULL,
    type VARCHAR(3) NOT NULL,
    user_id INT
)
INSERT INTO transactions VALUES (1,&quot;2023-12-17 20:54:00&quot;, 100.50, &quot;INC&quot;, 1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="wip" tabindex="-1"><a class="header-anchor" href="#wip" aria-hidden="true">#</a> [WIP]</h3>`,4);function c(u,o){return e(),i("div",null,[r,s(" more "),v])}const b=n(l,[["render",c],["__file","playground.html.vue"]]);export{b as default};
