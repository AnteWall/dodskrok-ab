import { Resolvers, DebugToken } from "../generated/graphql";
import { IDataSources } from "../dataSources/types";
import lobbyResolvers from "./lobby";
import queryResolver from "./query";
import mutationResolver from "./mutation";
import { IncomingHttpHeaders } from "http";

export type GraphQLContext = {
  dataSources: IDataSources;
  headers: IncomingHttpHeaders;
  authToken: DebugToken | null;
};

const resolvers: Resolvers<GraphQLContext> = {
  Lobby: lobbyResolvers,
  Query: queryResolver,
  Mutation: mutationResolver
};
export default resolvers;
