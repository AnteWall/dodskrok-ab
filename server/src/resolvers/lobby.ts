import { LobbyResolvers, Player } from '../generated/graphql';
import { GraphQLContext } from './resolvers';

const lobbyResolvers: LobbyResolvers<GraphQLContext> = {
  id: parent => parent._id,
  players: parent => {
    return parent.player_ids.map(id => {
      const p: Player = {
        user: {
          id,
          name: 'test'
        },
        score: 0
      };
      return p;
    });
  }
};

export default lobbyResolvers;
