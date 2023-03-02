import {
    IsArray,
    IsNotEmpty,
    IsString,
    IsUrl,
} from 'class-validator';
export class CreateWishlistDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsUrl()
    image: string;

    @IsArray()
    itemsId: number[];
}