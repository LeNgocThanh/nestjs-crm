import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema( {collection: 'HumanResources'} )
export class HumanResources extends Document {
  @Prop({ required: true, unique: true })
  Name: string; 

  @Prop()
  Description: string;

  @Prop()
  Phone: string;
}

export const HumanResourceSchema = SchemaFactory.createForClass(HumanResources);