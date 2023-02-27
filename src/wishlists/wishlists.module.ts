import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WishList } from './wishlist.entity';
import { WishlistsService } from './wishlists.service';

@Module({
    imports: [TypeOrmModule.forFeature([WishList])],
    exports: [WishlistsService],
    providers: [WishlistsService]
})
export class WishlistsModule { }
