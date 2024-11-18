import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'Functions', timestamps: true})
export class Functions extends Document {
  @Prop({ required: true, unique: true })
  functionName: string; 

  @Prop()
  description: string;  

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const FunctionSchema = SchemaFactory.createForClass(Functions);