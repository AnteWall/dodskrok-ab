import { model, Document, Schema } from "mongoose";

export interface PlayerModel extends Document {
  username: string;
  score: number;
  deviceId: string;
}

const PlayerSchema = new Schema({
  username: { type: String, required: true },
  deviceId: { type: String, required: true },
  score: { type: Number, default: 0, required: true }
});

const Player = model<PlayerModel>("Player", PlayerSchema);
export default Player;
