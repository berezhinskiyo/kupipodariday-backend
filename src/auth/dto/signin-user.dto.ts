import {
    IsNotEmpty,
    IsString,
    Length,
    MinLength,
} from 'class-validator';

export class SigninUserDto {
    @IsNotEmpty()
    @Length(1, 64)
    @IsString()
    username: string;


    @IsNotEmpty()
    @MinLength(2)
    @IsString()
    password: string;
}