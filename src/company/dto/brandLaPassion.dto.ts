import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateBrandLaPassionDto {
  @IsNotEmpty()
  @IsString()
  SubBrandName: string;  

  @IsOptional()
  @IsString()
  Description?: string;
}

export class UpdateBrandLaPassionDto {
    @IsOptional()
    @IsString()
    SubBrandName?: string;    
  
    @IsOptional()
    @IsString()
    Description?: string;
  }