import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema( {collection: 'Category'} )
export class Category extends Document {
  @Prop({ required: true, unique: true })
  CategoryName: string; 

  @Prop()
  Description: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);