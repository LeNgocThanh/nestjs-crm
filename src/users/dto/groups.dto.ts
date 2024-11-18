import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGroupDto {
  @IsNotEmpty()
  @IsString()
  groupName: string;

  @IsString()
  description?: string;
}

export class UpdateGroupDto {
    @IsNotEmpty()
    @IsString()
    groupName: string;
  
    @IsString()
    description?: string;
  }