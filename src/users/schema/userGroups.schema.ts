import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ collection: 'UserGroups', timestamps: true})
export class UserGroups extends Document {
  @Prop({ required: true, unique: true })
  userGroupName: string; 

  @Prop({ type: Types.ObjectId, ref: 'Users', required: true })
  users: Types.ObjectId;  

  @Prop({ type: Types.ObjectId, ref: 'Groups', required: true })
  groups: Types.ObjectId; 

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const UserGroupsSchema = SchemaFactory.createForClass(UserGroups);