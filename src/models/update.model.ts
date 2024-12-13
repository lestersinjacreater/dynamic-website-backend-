import mongoose, { Schema, Document } from 'mongoose';

export interface IUpdate extends Document {
  title: string;
  content: string;
  createdAt: Date;
}

const UpdateSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IUpdate>('Update', UpdateSchema);
