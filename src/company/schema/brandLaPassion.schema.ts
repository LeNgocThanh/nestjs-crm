import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema( {collection: 'BrandLaPassion'} )
export class BrandLaPassion extends Document {
  @Prop({ required: true, unique: true })
  SubBrandName: string; 

  @Prop()
  Description: string;
}

export const BrandLaPassionSchema = SchemaFactory.createForClass(BrandLaPassion);