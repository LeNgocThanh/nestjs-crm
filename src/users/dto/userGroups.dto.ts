import { IsNotEmpty, IsString, IsMongoId } from 'class-validator';

export class CreateUserGroupDto {
  @IsNotEmpty()
  @IsString()
  userGroupName: string;

  @IsNotEmpty()
  @IsMongoId()
  users: string;

  @IsNotEmpty()
  @IsMongoId()
  groups: string;
}

export class UpdateUserGroupDto {
    @IsNotEmpty()
    @IsString()
    userGroupName: string;
  
    @IsNotEmpty()
    @IsMongoId()
    users: string;
  
    @IsNotEmpty()
    @IsMongoId()
    groups: string;
  }