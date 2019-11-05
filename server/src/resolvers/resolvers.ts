import { Resolvers } from '../generated/graphql';
import { IDataSources } from '../dataSources/types';
import lobbyResolvers from './lobby';
import queryResolver from './query';
import mutationResolver from './mutation';

export type GraphQLContext = {
  dataSources: IDataSources;
};

const resolvers: Resolvers<GraphQLContext> = {
  Lobby: lobbyResolvers,
  Query: queryResolver,
  Mutation: mutationResolver
};
export default resolvers;
