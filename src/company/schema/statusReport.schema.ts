import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema( {collection: 'StatusReport'} )
export class StatusReport extends Document {
  @Prop({ required: true, unique: true })
  StatusName: string; 

  @Prop()
  Description: string;
}

export const StatusReportSchema = SchemaFactory.createForClass(StatusReport);