import { IsNotEmpty, IsString, IsBoolean, IsMongoId, IsOptional } from 'class-validator';

export class CreateGroupFunctionDto {
  @IsNotEmpty()
  @IsString()
  groupFunctionName: string;

  @IsBoolean()
  @IsOptional()
  canRead?: boolean;

  @IsBoolean()
  @IsOptional()
  canWrite?: boolean;

  @IsBoolean()
  @IsOptional()
  canUpdate?: boolean;

  @IsBoolean()
  @IsOptional()
  canDelete?: boolean;

  @IsNotEmpty()
  @IsMongoId()
  groups: string;

  @IsNotEmpty()
  @IsMongoId()
  functions: string;

  @IsString()
  @IsOptional()
  description?: string;
}

export class UpdateGroupFunctionDto {
    @IsNotEmpty()
    @IsString()
    groupFunctionName: string;
  
    @IsBoolean()
    @IsOptional()
    canRead?: boolean;
  
    @IsBoolean()
    @IsOptional()
    canWrite?: boolean;
  
    @IsBoolean()
    @IsOptional()
    canUpdate?: boolean;
  
    @IsBoolean()
    @IsOptional()
    canDelete?: boolean;
  
    @IsNotEmpty()
    @IsMongoId()
    groups: string;
  
    @IsNotEmpty()
    @IsMongoId()
    functions: string;
  
    @IsString()
    @IsOptional()
    description?: string;
  }