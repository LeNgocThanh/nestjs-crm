import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ collection: 'GroupFunctions', timestamps: true})
export class GroupFunctions extends Document {
  @Prop({ required: true, unique: true })
  groupFunctionName: string;

  @Prop({ default: false })
  canRead: boolean;

  @Prop({ default: false })
  canWrite: boolean;

  @Prop({ default: false })
  canUpdate: boolean;

  @Prop({ default: false })
  canDelete: boolean;

  @Prop({ type: Types.ObjectId, ref: 'Groups', required: true })
  groups: Types.ObjectId; 

  @Prop({ type: Types.ObjectId, ref: 'Functions', required: true })
  functions: Types.ObjectId; 

  @Prop()
  description: string;
      
  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const GroupFunctionsSchema = SchemaFactory.createForClass(GroupFunctions);