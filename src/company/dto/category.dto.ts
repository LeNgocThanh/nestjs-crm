import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  CategoryName: string;  

  @IsOptional()
  @IsString()
  Description?: string;
}

export class UpdateCategoryDto {
    @IsOptional()
    @IsString()
    CategoryName?: string;    
  
    @IsOptional()
    @IsString()
    Description?: string;
  }