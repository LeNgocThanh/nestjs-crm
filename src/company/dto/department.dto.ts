import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateDepartmentDto {
  @IsNotEmpty()
  @IsString()
  Department: string;  

  @IsOptional()
  @IsString()
  Description?: string;
}

export class UpdateDepartmentDto {
    @IsOptional()
    @IsString()
    Department?: string;    
  
    @IsOptional()
    @IsString()
    Description?: string;
  }