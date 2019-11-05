import { QueryResolvers } from '../generated/graphql';
import { GraphQLContext } from './resolvers';
import { NotFoundError } from '../utils/errors';

const queryResolver: QueryResolvers<GraphQLContext> = {
  hello: () => 'test',
  lobby: async (_, { id }, { dataSources }) => {
    const lobby = await dataSources.mongoApi.lobbies().getLobby(id);
    if (!lobby) {
      throw NotFoundError;
    }
    return lobby;
  },
  lobbies: async (_, __, { dataSources }) => {
    return await dataSources.mongoApi.lobbies().getLobbies();
  }
};

export default queryResolver;
