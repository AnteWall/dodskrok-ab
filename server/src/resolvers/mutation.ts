import { MutationResolvers } from "../generated/graphql";
import { GraphQLContext } from "./resolvers";
import { sign } from "jsonwebtoken";

const SECRET = process.env.SECRET_TOKEN || "development";

interface DebugToken {
  id: string;
  deviceId: string;
}

const mutationResolver: MutationResolvers<GraphQLContext> = {
  authenticate: async (_, { deviceId }) => {
    const jwt = sign({ deviceId }, SECRET);
    return { jwt };
  },
  debugToken: (_, _args, context) => {
    return context.authToken as DebugToken;
  },

  createLobby: async (_, { input }, { dataSources }) => {
    return await dataSources.mongoApi
      .lobbies()
      .createLobby({ name: input.name, playerIds: [] });
  },
  joinLobby: async (_, { input }, { dataSources, authToken }) => {
    return await dataSources.mongoApi.lobbies().joinLobby({
      username: input.username,
      lobbyId: input.lobbyId,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      deviceId: authToken!.deviceId
    });
  }
};

export default mutationResolver;
