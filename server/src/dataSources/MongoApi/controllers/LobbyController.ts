import Lobby, { LobbyModel } from '../models/LobbyModel';
import { NotFoundError } from '../../../utils/errors';
import PlayerController from './PlayerController';

interface JoinLobbyArguments {
  lobbyId: string;
  username: string;
  deviceId: string;
}

export default class LobbyController {
  playerController: PlayerController;
  constructor(playerController: PlayerController) {
    this.playerController = playerController;
  }

  async joinLobby(args: JoinLobbyArguments): Promise<LobbyModel> {
    const lobby = await this.getLobby(args.lobbyId);
    if (!lobby) {
      throw NotFoundError;
    }

    const user = await this.playerController.createPlayer({
      username: args.username,
      deviceId: args.deviceId
    });

    lobby.playerIds.push(user._id);
    return await lobby.save();
  }
  async getLobbies(): Promise<LobbyModel[]> {
    return await Lobby.find();
  }

  async getLobby(id: string): Promise<LobbyModel | null> {
    return await Lobby.findById(id);
  }

  async createLobby(
    args: Pick<LobbyModel, 'name' | 'playerIds'>
  ): Promise<LobbyModel> {
    return await Lobby.create(args);
  }
}
