import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Wish } from 'src/wishes/entities/wish.entity';
import { WishesService } from 'src/wishes/wishes.service';
import { WishList } from './entities/wishlist.entity';
import { WishlistsController } from './wishlists.controller';
import { WishlistsService } from './wishlists.service';

@Module({
    imports: [TypeOrmModule.forFeature([WishList, Wish, User]), PassportModule],
    exports: [WishlistsService],
    providers: [ConfigService, WishesService, UsersService, WishlistsService],
    controllers: [WishlistsController],
})
export class WishlistsModule { }
