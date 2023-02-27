import {
    IsNotEmpty,
    IsString,
    Length,
    IsUrl,
    MinLength,
    IsEmail,
} from 'class-validator';

export class CreateUserDto {
    username: string;
}