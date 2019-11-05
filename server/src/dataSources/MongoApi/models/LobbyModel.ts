import { model, Document, Schema } from 'mongoose';

export interface LobbyModel extends Document {
  name: string;
  player_ids: string[];
}

const LobbySchema = new Schema({
  name: { type: String, required: true },
  player_ids: { type: [String], required: true }
});

const Lobby = model<LobbyModel>('Lobby', LobbySchema);
export default Lobby;
