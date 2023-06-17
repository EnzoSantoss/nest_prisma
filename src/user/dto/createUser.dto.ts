import { IsEmail, IsNotEmpty, IsString, isNumber } from 'class-validator';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  propriedadeTeste: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
