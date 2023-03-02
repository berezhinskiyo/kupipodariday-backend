import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateOfferDto } from './dto/create-offers.dto';
import { OffersService } from './offers.service';

@Controller('offers')
export class OffersController {

    constructor(private offersService: OffersService) { }

    @Post()
    insert(@Body() offer: CreateOfferDto) {
        return this.offersService.create(offer);
    }

    @Get(':id')
    getUser(@Param('id') id: number) {
        return this.offersService.findById(id);
    }

    @Get()
    getUsers() {
        return this.offersService.findAll();
    }

}
