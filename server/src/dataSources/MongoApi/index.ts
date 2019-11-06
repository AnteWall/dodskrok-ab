import LobbyController from './controllers/LobbyController';
import PlayerController from './controllers/PlayerController';
import { DataSource } from 'apollo-datasource';

import connection from './connection';

export default class MongoApi extends DataSource {
  private connection = connection;
  private playerController = new PlayerController();
  private lobbyController = new LobbyController(this.playerController);

  constructor() {
    super();
  }

  public players(): PlayerController {
    return this.playerController;
  }

  public lobbies(): LobbyController {
    return this.lobbyController;
  }
}
