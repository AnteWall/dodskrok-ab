import Player, { PlayerModel } from '../models/PlayerModel';
import { Types } from 'mongoose';

export default class PlayerController {
  async getPlayers(playerIds: string[]): Promise<PlayerModel[]> {
    return await Player.find({
      _id: {
        $in: playerIds.map(id => Types.ObjectId(id))
      }
    });
  }

  async createPlayer(
    args: Pick<PlayerModel, 'username' | 'deviceId'>
  ): Promise<PlayerModel> {
    return await Player.create(args);
  }
}
