import { ApolloError } from 'apollo-server-koa';

export const NotFoundError = new ApolloError('Resource not found', '404');
