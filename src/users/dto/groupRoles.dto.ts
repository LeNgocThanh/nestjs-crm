import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateGroupRolesDto {
  @IsNotEmpty()
  @IsString()
  groupRoleName: string;

  @IsOptional()
  @IsBoolean()
  canReadCompany?: boolean;

  @IsOptional()
  @IsBoolean()
  canWriteCompany?: boolean;

  @IsOptional()
  @IsBoolean()
  canUpdateCompany?: boolean;

  @IsOptional()
  @IsBoolean()
  canDeleteCompany?: boolean;

  @IsOptional()
  @IsString()
  detail?: string;

  @IsOptional()
  @IsBoolean()
  deleted?: boolean;
}

export class UpdateGroupRolesDto {
  @IsOptional()
  @IsString()
  groupRoleName?: string;

  @IsOptional()
  @IsBoolean()
  canReadCompany?: boolean;

  @IsOptional()
  @IsBoolean()
  canWriteCompany?: boolean;

  @IsOptional()
  @IsBoolean()
  canUpdateCompany?: boolean;

  @IsOptional()
  @IsBoolean()
  canDeleteCompany?: boolean;

  @IsOptional()
  @IsString()
  detail?: string;

  @IsOptional()
  @IsBoolean()
  deleted?: boolean;
}