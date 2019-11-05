## Server

Server we use is a GraphQL connecting to a mongodb database. Therefor we need a mongodb instance to run.
For development it's easiest just to install and start a docker container with mongo

```bash
docker pull mongo
docker run --name dk_mongo -d -p 127.0.0.1:27017:27017 mongo
```
