// nest-api-bookroom/src/room-module/roomBook.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ collection: 'RoomBrand' })
export class RoomBrand extends Document {
 @Prop({ type: Types.ObjectId, ref: 'Brand', required: true })
  BrandName: Types.ObjectId;
  
  @Prop({ required: true })
  RoomNumber: string;

  @Prop({ required: true })
  RoomType: string;

  @Prop()
  RoomAmenities: string;

  @Prop()
  RoomDetail: string;

  @Prop()
  RoomImages: string;
}

export const RoomBrandSchema = SchemaFactory.createForClass(RoomBrand);
