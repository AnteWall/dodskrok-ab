## Server

### Development

go into `server` folder

Server we use is a GraphQL connecting to a mongodb database. Therefor we need a mongodb instance to run.
For development it's easiest just to install and start a docker container with mongo

```bash
docker pull mongo
docker run --name dk_mongo -d -p 127.0.0.1:27017:27017 mongo
```

**Commands**

`yarn dev`: Will start to watch server changes and graphql schema changes and autogenerate typings

then open `http://localhost:4000/graphql` to see GraphQL Playground

## Client

TODO
