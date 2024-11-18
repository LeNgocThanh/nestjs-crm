import { Schema, Document, model } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email?: string;
  password: string;
  roles: string[];
  GroupRoles: Schema.Types.ObjectId;
  refreshToken?: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  email: { type: String, unique: true },
  password: { type: String, required: true },
  roles: { type: [String], default: ['user'] },
  GroupRoles: { type: Schema.Types.ObjectId, ref: 'GroupRoles', required: true },
  refreshToken: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const UserModel = model<IUser>('Users', UserSchema);