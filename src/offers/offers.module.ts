import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Wish } from 'src/wishes/entities/wish.entity';
import { WishesService } from 'src/wishes/wishes.service';
import { Offer } from './entities/offer.entity';
import { OffersController } from './offers.controller';
import { OffersService } from './offers.service';

@Module({
    imports: [TypeOrmModule.forFeature([Offer]), TypeOrmModule.forFeature([Wish]), TypeOrmModule.forFeature([User]), PassportModule],
    exports: [OffersService],
    providers: [ConfigService, OffersService, WishesService, UsersService],
    controllers: [OffersController],
})
export class OffersModule { }
