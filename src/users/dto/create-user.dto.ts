import {
    IsNotEmpty,
    IsString,
    IsUrl,
    MinLength,
    IsEmail,
} from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    username: string;
    @IsString()
    about: string;
    @IsUrl()
    avatar: string;
    @IsEmail()
    email: string;
    @MinLength(3)
    @IsNotEmpty()
    password: string;
}