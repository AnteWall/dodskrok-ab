import Player, { PlayerModel } from '../models/PlayerModel';

export default class PlayerController {
  async createPlayer(args: Pick<PlayerModel, 'username'>) {
    return await Player.create(args);
  }
}
