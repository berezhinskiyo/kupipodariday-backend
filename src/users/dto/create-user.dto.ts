import { ApiProperty } from '@nestjsx/crud/lib/crud';
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
    @ApiProperty({ example: 'username' })
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