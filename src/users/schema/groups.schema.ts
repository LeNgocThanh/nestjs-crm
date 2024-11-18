import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ collection: 'Groups', timestamps: true})
export class Groups extends Document {
  @Prop({ required: true, unique: true })
  groupName: string; 

  @Prop()
  description: string; 
  
  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const GroupsSchema = SchemaFactory.createForClass(Groups);