import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class CreateRoomBrandDto {
  @IsNotEmpty()
  BrandName: Types.ObjectId;

  @IsNotEmpty()
  @IsString()
  RoomNumber: string;

  @IsNotEmpty()
  @IsString()
  RoomType: string;

  @IsOptional()
  @IsString()
  RoomAmenities?: string;

  @IsOptional()
  @IsString()
  RoomDetail?: string;

  @IsOptional()
  @IsString()
  RoomImages?: string;
}

export class UpdateRoomBrandDto {
    @IsOptional()
    BrandName?: Types.ObjectId;
  
    @IsOptional()
    @IsString()
    RoomNumber?: string;
  
    @IsOptional()
    @IsString()
    RoomType?: string;
  
    @IsOptional()
    @IsString()
    RoomAmenities?: string;
  
    @IsOptional()
    @IsString()
    RoomDetail?: string;
  
    @IsOptional()
    @IsString()
    RoomImages?: string;
  }