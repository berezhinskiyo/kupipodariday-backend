import { ApiProperty } from '@nestjs/swagger';
import {
    IsUrl,
    Length,
} from 'class-validator';

export class CreateWishDto {
    @Length(1, 250)
    @ApiProperty({ example: 'gift', description: 'name of gift ', default: 'gift' })
    name: string;

    @Length(1, 1024)
    @ApiProperty()
    description: string;

    @IsUrl()
    @ApiProperty()
    image: string;

    @IsUrl()
    @ApiProperty()
    link: string;

    @ApiProperty()
    price: number;
}