import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Offer } from './offers/offer.entity';
import { Wish } from './wishes/wish.entity';
import { WishList } from './wishlists/wishlist.entity';
import { UsersController } from './users/users.controller';
import { OffersController } from './offers/offers.controller';
import { WishesController } from './wishes/wishes.controller';
import { WishlistsController } from './wishlists/wishlists.controller';
import { UsersService } from './users/users.service';
import { WishlistsService } from './wishlists/wishlists.service';
import { WishesService } from './wishes/wishes.service';
import { OffersService } from './offers/offers.service';
import { OffersModule } from './offers/offers.module';
import { UsersModule } from './users/users.module';
import { WishesModule } from './wishes/wishes.module';
import { WishlistsModule } from './wishlists/wishlists.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'student',
      password: 'student',
      database: 'nest_project',
      entities: [User, Offer, Wish, WishList],
      synchronize: false,
      schema: 'nest_project',
    }),
    OffersModule,
    UsersModule,
    WishesModule,
    WishlistsModule,
  ],
  controllers: [AppController, UsersController, OffersController, WishesController, WishlistsController],
  providers: [AppService, UsersService, WishlistsService, WishesService, OffersService],
})
export class AppModule { }
