import Lobby, { LobbyModel } from '../models/LobbyModel';
import { NotFoundError } from '../../../utils/errors';

interface JoinLobbyArguments {
  lobbyId: string;
}

export default class LobbyController {
  async joinLobby(args: JoinLobbyArguments) {
    const lobby = await this.getLobby(args.lobbyId);
    if (!lobby) {
      throw NotFoundError;
    }

    // TODO ADD USER

    return lobby;
  }
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
