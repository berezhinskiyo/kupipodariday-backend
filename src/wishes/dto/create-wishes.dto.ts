import {
    IsUrl,
    Length,
} from 'class-validator';

export class CreateWishDto {
    @Length(1, 250)
    name: string;

    @Length(1, 1024)
    description: string;

    @IsUrl()
    image: string;

    @IsUrl()
    link: string;

    price: number;
}