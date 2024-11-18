import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema( {collection: 'Department'} )
export class Department extends Document {
  @Prop({ required: true, unique: true })
  Department: string; 

  @Prop()
  Description: string;
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);