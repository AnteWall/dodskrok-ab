import { MutationResolvers } from '../generated/graphql';
import { GraphQLContext } from './resolvers';

const mutationResolver: MutationResolvers<GraphQLContext> = {
  createLobby: async (_, { input }, { dataSources }) => {
    return await dataSources.mongoApi
      .lobbies()
      .createLobby({ name: input.name, player_ids: [] });
  }
};

export default mutationResolver;
