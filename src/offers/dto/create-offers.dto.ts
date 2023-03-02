import {
    IsBoolean,
    IsCurrency,
    IsInt,
} from 'class-validator';
export class CreateOfferDto {
    @IsCurrency()
    amount: number;

    @IsBoolean()
    hidden: boolean;

    @IsInt()
    itemId: number;
}