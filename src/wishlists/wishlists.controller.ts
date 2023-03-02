import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { WishlistsService } from './wishlists.service';

@Controller('wishlists')
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
    update(@Param('id') id: number, @Body() wishlistDto: UpdateWishlistDto) {
        return this.wishlistsService.update(id, wishlistDto);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        return this.wishlistsService.delete(id);
    }
}
