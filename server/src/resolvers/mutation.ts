import { MutationResolvers, AuthToken } from '../generated/graphql';
import { GraphQLContext } from './resolvers';
import { sign, verify } from 'jsonwebtoken';

const SECRET = process.env.SECRET_TOKEN || 'development';

interface DebugToken {
  id: string;
  deviceId: string;
}

const mutationResolver: MutationResolvers<GraphQLContext> = {
  authenticate: async (_, { deviceId }, { dataSources }) => {
    const user = {
      id: 'MAKE A UNIQE ID'
    };

    const jwt = sign({ ...user, deviceId }, SECRET);

    return { jwt };
  },
  debugToken: (_, _args, context) => {
    return context.authToken as DebugToken;
  },

  createLobby: async (_, { input }, { dataSources }) => {
    return await dataSources.mongoApi
      .lobbies()
      .createLobby({ name: input.name, player_ids: [] });
  },
  joinLobby: async (_, { input }, { dataSources }) => {
    return await dataSources.mongoApi
      .lobbies()
      .joinLobby({ lobbyId: input.lobbyId });
  }
};

export default mutationResolver;
