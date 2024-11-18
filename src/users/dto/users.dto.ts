import { IsString, IsEmail, IsNotEmpty, IsArray, IsOptional, IsMongoId, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsNotEmpty()
  password: string;  
  
}

export class UpdateUserDto {
    @IsString()
    @IsNotEmpty()
    username: string;
  
    @IsEmail()
    @IsOptional()
    email?: string;
  
    @IsString()
    @IsNotEmpty()
    password: string;  
       
  }

  export class ChangePasswordDto {
    @IsString()
    @MinLength(6)
    oldPassword: string;
  
    @IsString()
    @MinLength(6)
    newPassword: string;
  }