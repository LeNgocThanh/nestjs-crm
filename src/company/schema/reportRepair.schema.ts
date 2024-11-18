import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema( {collection: 'ReportRepair', timestamps: true} )
export class ReportRepair extends Document {
  @Prop({ required: true })
  ReportRepairName: string;  

  @Prop()
  desiredDate: Date;

  @Prop()
  Area: string;

  @Prop()
  completeDate: Date;

  @Prop()
  Detail: string;

  @Prop({ type: Types.ObjectId, ref: 'Users', required: true })
  user: Types.ObjectId; 

 @Prop({ type: Types.ObjectId, ref: 'Department', required: true })
  department: Types.ObjectId; 

 @Prop({ type: Types.ObjectId, ref: 'Category', required: true })
category: Types.ObjectId; 

 @Prop({ type: Types.ObjectId, ref: 'BrandLaPassion', required: true })
brandLaPassion: Types.ObjectId; 

@Prop({ type: Types.ObjectId, ref: 'StatusReport', required: true })
statusReport: Types.ObjectId; 

@Prop()
status: String;

 @Prop()
  Description: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop({ type: [String] })
  images: string[];

  @Prop()
  repairer: string;

  @Prop()
  startDate: Date;

  @Prop()
  endDate: Date;

  @Prop()
  cost: string;
}

export const ReportRepairSchema = SchemaFactory.createForClass(ReportRepair);



