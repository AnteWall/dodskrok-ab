import { LobbyResolvers } from "../generated/graphql";
import { GraphQLContext } from "./resolvers";

const lobbyResolvers: LobbyResolvers<GraphQLContext> = {
  id: parent => parent._id,
  players: async (parent, _, { dataSources }) => {
    return await dataSources.mongoApi.players().getPlayers(parent.playerIds);
  }
};

export default lobbyResolvers;
