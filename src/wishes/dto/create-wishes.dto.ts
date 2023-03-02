import {
    IsCurrency,
    IsNotEmpty,
    IsNumber,
    IsString,
    IsUrl,
    Length,
    MinLength
} from 'class-validator';

export class CreateWishDto {
    @Length(1, 250)
    name: string;

    @Length(1, 1024)
    description: 1500;

    @IsUrl()
    image: string;

    @IsUrl()
    link: string;

    @IsCurrency()
    price: number;
}