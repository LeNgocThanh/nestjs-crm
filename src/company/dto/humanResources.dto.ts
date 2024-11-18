import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateHumanResourcesDto {
  @IsNotEmpty()
  @IsString()
  Name: string;  

  @IsOptional()
  @IsString()
  Description?: string;

  @IsOptional()
  @IsString()
  Phone?: string;
}

export class UpdateHumanResourcesDto {
    @IsOptional()
    @IsString()
    Name?: string;    
  
    @IsOptional()
    @IsString()
    Description?: string;

    @IsOptional()
    @IsString()
    Phone?: string;
  }