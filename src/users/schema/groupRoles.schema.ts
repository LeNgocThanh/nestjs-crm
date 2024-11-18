import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'GroupRoles', timestamps: true})
export class GroupRoles extends Document {
  @Prop({ required: true, unique: true })
  groupRoleName: string;

  @Prop({ default: false })
  canReadCompany: boolean;

  @Prop({ default: false })
  canWriteCompany: boolean;

  @Prop({ default: false })
  canUpdateCompany: boolean;

  @Prop({ default: false })
  canDeleteCompany: boolean;

  @Prop()
  detail: string;

  @Prop({default: false })
  deleted: boolean;
    
  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const GroupRolesSchema = SchemaFactory.createForClass(GroupRoles);