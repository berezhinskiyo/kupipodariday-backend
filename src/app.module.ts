import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Offer } from './offers/offer.entity';
import { Wish } from './wishes/wish.entity';
import { WishList } from './wishlists/wishlist.entity';
import { UsersController } from './users/users.controller';
import { OffersController } from './offers/offers.controller';
import { WishesController } from './wishes/wishes.controller';
import { WishlistsController } from './wishlists/wishlists.controller';
import { OffersModule } from './offers/offers.module';
import { UsersModule } from './users/users.module';
import { WishesModule } from './wishes/wishes.module';
import { WishlistsModule } from './wishlists/wishlists.module';
import configuration from './configuration';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
const schema = Joi.object({
  database: Joi.object({
    host: Joi.string().required(),
    port: Joi.number().integer().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    schema: Joi.string().required(),
  }),
});

@Module({
  imports: [
    ConfigModule.forRoot({ validationSchema: schema, load: [configuration] }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('database.host'),
        port: configService.get<number>('database.PORT'),
        username: configService.get<string>('database.username'),
        password: configService.get<string>('database.password'),
        database: configService.get<string>('database.schema'),
        schema: configService.get<string>('database.schema'),
        entities: [User, Offer, Wish, WishList],
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
    OffersModule,
    UsersModule,
    WishesModule,
    WishlistsModule,
    AuthModule,
  ],

})
export class AppModule { }
