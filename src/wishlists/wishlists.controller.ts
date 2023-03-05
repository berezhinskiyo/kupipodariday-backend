import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, Request } from '@nestjs/common';
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
        return this.wishlistsService.update(req.user.id, id, wishlistDto);

    }

    @Delete(':id')
    deleteUser(@Param('id') id: number, @Request() req: any) {
        return this.wishlistsService.delete(req.user.id, id);

    }
}
