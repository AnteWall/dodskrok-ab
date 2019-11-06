import Lobby, { LobbyModel } from '../models/LobbyModel';
import { NotFoundError } from '../../../utils/errors';
import Player from '../models/PlayerModel';
import PlayerController from './PlayerController';

interface JoinLobbyArguments {
  lobbyId: string;
  username: string;
}

export default class LobbyController {
  playerController: PlayerController;
  constructor(playerController: PlayerController) {
    this.playerController = playerController;
  }

  async joinLobby(args: JoinLobbyArguments) {
    const lobby = await this.getLobby(args.lobbyId);
    if (!lobby) {
      throw NotFoundError;
    }

    const user = await this.playerController.createPlayer({
      username: args.username
    });

    lobby.player_ids.push(user._id);
    return await lobby.save();
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
