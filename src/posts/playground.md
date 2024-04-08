---
# This is the title of the article
title: "Creando un pipeline de datos: let's get dirty"
# You can customize cover image
cover: /assets/images/pipeline.jpeg
# This is the icon of the page
icon: file
# This control sidebar order
order: 3
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
  - Docker
  - MySQL
  - Kafka
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true

disableCopy: true
---

En este post vamos a ver una de las opciones de sincronización mas utilizadas de momento, haremos uso del CDC de nuestra base de datos transaccional MySQL para publicar cada una de sus entradas en nuestro stack de Kafka. 

<!-- more -->

## Introduccion

```
version: '3'
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
      - "3306:3306"

  zookeeper:
    image: wurstmeister/zookeeper
    ports:
      - "2181:2181"
      
  kafka:
    image: wurstmeister/kafka
    ports:
      - "9092:9092"
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
      BOOTSTRAP_SERVERS: 'kafka:9092'
      GROUP_ID: debezium-group
      CONFIG_STORAGE_TOPIC: debezium-connect-configs
      OFFSET_STORAGE_TOPIC: debezium-connect-offsets
      STATUS_STORAGE_TOPIC: debezium-connect-statuses
      PLUGIN_PATH: '/kafka/connect'
      CONNECT_KEY_CONVERTER: 'org.apache.kafka.connect.json.JsonConverter'
      CONNECT_VALUE_CONVERTER: 'org.apache.kafka.connect.json.JsonConverter'
      CONNECT_INTERNAL_KEY_CONVERTER: 'org.apache.kafka.connect.json.JsonConverter'
      CONNECT_INTERNAL_VALUE_CONVERTER: 'org.apache.kafka.connect.json.JsonConverter'
      CONNECT_REST_ADVERTISED_HOST_NAME: connect
      CONNECT_REST_PORT: 8083
      CONNECT_LOG4J_ROOT_LOGLEVEL: 'INFO'
      CONNECT_PLUGIN_PATH: '/usr/share/java,/usr/share/confluent-hub-components'
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
                bootstrap.servers: "kafka:9092"
              connect:
                - name: "connect"
                  url: "http://connect:8083"
    ports:
      - 8081:8080
    links:
      - kafka
```

```
CREATE TABLE IF NOT EXISTS transactions (
    transaction_id INT NOT NULL PRIMARY KEY,
    created_at TIMESTAMP NOT NULL,
    amount DECIMAL(12,2) NOT NULL,
    type VARCHAR(3) NOT NULL,
    user_id INT
)
INSERT INTO transactions VALUES (1,"2023-12-17 20:54:00", 100.50, "INC", 1)
```
### [WIP]