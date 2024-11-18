import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateBrandDto {
  @IsNotEmpty()
  @IsString()
  BrandName: string;

  @IsNotEmpty()
  @IsString()
  Address: string;

  @IsOptional()
  @IsUrl()
  GoogleMapUrl?: string;

  @IsOptional()
  @IsString()
  imageDetail?: string;

  @IsOptional()
  @IsString()
  Detail?: string;
}

export class UpdateBrandDto {
    @IsOptional()
    @IsString()
    BrandName?: string;
  
    @IsOptional()
    @IsString()
    Address?: string;
  
    @IsOptional()
    @IsUrl()
    GoogleMapUrl?: string;
  
    @IsOptional()
    @IsString()
    imageDetail?: string;
  
    @IsOptional()
    @IsString()
    Detail?: string;
  }