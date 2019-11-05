import Lobby, { LobbyModel } from '../models/LobbyModel';

export default class LobbyController {
  async getLobbies() {
    return await Lobby.find();
  }

  async getLobby(id: string) {
    return await Lobby.findById(id);
  }

  async createLobby(args: Pick<LobbyModel, 'name' | 'player_ids'>) {
    return await Lobby.create(args);
  }
}
