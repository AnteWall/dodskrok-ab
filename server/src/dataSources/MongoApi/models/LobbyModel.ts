import { model, Document, Schema } from "mongoose";

export interface LobbyModel extends Document {
  name: string;
  playerIds: string[];
}

const LobbySchema = new Schema({
  name: { type: String, required: true },
  playerIds: { type: [String], required: true }
});

const Lobby = model<LobbyModel>("Lobby", LobbySchema);
export default Lobby;
