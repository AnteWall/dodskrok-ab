import Koa from 'koa';
import { ApolloServer } from 'apollo-server-koa';
import { importSchema } from 'graphql-import';
import resolvers from './resolvers/resolvers';
import MongoApi from './dataSources/MongoApi';
import { IDataSources } from './dataSources/types';

const typeDefs = importSchema('src/schemas/schema.graphql');

const dataSources: IDataSources = {
  mongoApi: new MongoApi()
};

const server = new ApolloServer({
  typeDefs,
  // @ts-ignore
  resolvers,
  // @ts-ignore
  dataSources: () => dataSources
});

const app = new Koa();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
