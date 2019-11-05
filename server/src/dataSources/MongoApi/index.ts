import LobbyController from './controllers/LobbyController';
import { DataSource } from 'apollo-datasource';

import connection from './connection';

export default class MongoApi extends DataSource {
  private connection = connection;
  private lobbyController = new LobbyController();

  constructor() {
    super();
  }

  public lobbies(): LobbyController {
    return this.lobbyController;
  }
}
