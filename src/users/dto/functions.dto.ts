import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateFunctionDto {
  @IsNotEmpty()
  @IsString()
  functionName: string;

  @IsString()
  @IsOptional()
  description?: string;
}

export class UpdateFunctionDto {
    @IsNotEmpty()
    @IsString()
    functionName: string;
  
    @IsString()
    @IsOptional()
    description?: string;
  }