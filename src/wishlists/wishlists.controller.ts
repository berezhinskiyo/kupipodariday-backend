import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, Request, HttpException, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { WishlistsService } from './wishlists.service';

@Controller('wishlistlists')
@UseGuards(AuthGuard('jwt'))
export class WishlistsController {
    constructor(private wishlistsService: WishlistsService) { }

    @Post()
    insert(@Body() wishlistDto: CreateWishlistDto) {

        return this.wishlistsService.create(wishlistDto);
    }

    @Get(':id')
    getWishlist(@Param('id') id: number) {
        return this.wishlistsService.findById(id);
    }

    @Get()
    getWishlists() {
        return this.wishlistsService.findAll();
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() wishlistDto: UpdateWishlistDto, @Request() req: any) {
        const res = this.wishlistsService.update(req.user.id, id, wishlistDto);
        if (res)
            return res;
        else throw new HttpException('Нельзя обновлять чужой список', HttpStatus.UNPROCESSABLE_ENTITY);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number, @Request() req: any) {
        const res = this.wishlistsService.delete(req.user.id, id);
        if (res)
            return res;
        else throw new HttpException('Нельзя удалять чужой список', HttpStatus.UNPROCESSABLE_ENTITY);
    }
}
