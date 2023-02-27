import {
    IsNotEmpty,
    IsString,
    Length,
    MinLength
} from 'class-validator';

export class SigninUserResponseDto {
    @IsNotEmpty()
    @Length(1, 64)
    @IsString()
    access_token: string;   
}