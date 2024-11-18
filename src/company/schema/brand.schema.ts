import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema( {collection: 'Brand'} )
export class Brand extends Document {
  @Prop({ required: true, unique: true })
  BrandName: string;

  @Prop({ required: true })
  Address: string;

  @Prop()
  GoogleMapUrl: string;

  @Prop()
  imageDetail: string;

  @Prop()
  Detail: string;
}

export const BrandSchema = SchemaFactory.createForClass(Brand);