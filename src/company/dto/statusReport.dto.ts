import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateStatusReportDto {
  @IsNotEmpty()
  @IsString()
  StatusName: string;  

  @IsOptional()
  @IsString()
  Description?: string;
}

export class UpdateStatusReportDto {
    @IsOptional()
    @IsString()
    StatusName?: string;    
  
    @IsOptional()
    @IsString()
    Description?: string;
  }