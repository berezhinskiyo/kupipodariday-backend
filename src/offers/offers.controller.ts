import { Body, Controller, Request, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateOfferDto } from './dto/create-offers.dto';
import { OffersService } from './offers.service';

@Controller('offers')
@UseGuards(AuthGuard('jwt'))
export class OffersController {

    constructor(private offersService: OffersService) { }

    @Post()
    insert(@Body() offer: CreateOfferDto, @Request() req: any) {
        return this.offersService.create(req.user.id, offer);
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
