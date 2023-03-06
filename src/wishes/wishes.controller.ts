import { Body, Controller, Delete, Get, Param, Patch, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';
import { CreateWishDto } from './dto/create-wishes.dto';
import { WishesService } from './wishes.service';

@Controller('wishes')
@ApiBearerAuth()
export class WishesController {
    constructor(private wishesService: WishesService) { }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    insert(@Body() wish: CreateWishDto, @Request() req: any) {
        return this.wishesService.create(req.user.id, wish);
    }
    @Get('last')
    getLast() {
        return this.wishesService.getLast();
    }
    @Get('top')
    getFirst() {
        return this.wishesService.getTop();
    }
    @Get(':id')
    @UseGuards(AuthGuard('jwt'))
    getUser(@Param('id') id: number) {
        return this.wishesService.findById(id);
    }

    @Delete(':id')
    @UseGuards(AuthGuard('jwt'))
    deleteUser(@Param('id') id: number, @Request() req: any) {
        return this.wishesService.delete(req.user.id, id);

    }
    @Patch(':id')
    @UseGuards(AuthGuard('jwt'))
    update(@Param('id') id: number, @Body() wish: CreateWishDto, @Request() req: any) {
        return this.wishesService.update(req.user.id, id, wish);
    }
    @Post(':id/copy')
    @UseGuards(AuthGuard('jwt'))
    copy(@Param('id') id: number) {
        return this.wishesService.copy(id);
    }

}
