import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateWishDto } from './dto/create-wishes.dto';
import { WishesService } from './wishes.service';

@Controller('wishes')
export class WishesController {
    constructor(private wishesService: WishesService) { }

    @Post()
    insert(@Body() wish: CreateWishDto) {
        return this.wishesService.create(wish);
    }
    @Get('last')
    getLast() {
        return this.wishesService.getLast();
    }
    @Get('first')
    getFirst() {
        return this.wishesService.getLast();
    }
    @Get(':id')
    getUser(@Param('id') id: number) {
        return this.wishesService.findById(id);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        return this.wishesService.delete(id);
    }
    @Patch(':id')
    update(@Param('id') id: number, @Body() wish: CreateWishDto) {
        return this.wishesService.update(id, wish);
    }
    @Post(':id/copy')
    copy(@Param('id') id: number) {
        return this.wishesService.copy(id);
    }

}
