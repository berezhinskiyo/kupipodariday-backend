import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Wish } from './entities/wish.entity';
import { WishesController } from './wishes.controller';
import { WishesService } from './wishes.service';

@Module({
    imports: [TypeOrmModule.forFeature([Wish]), TypeOrmModule.forFeature([User]), PassportModule],
    exports: [WishesService, UsersService],
    providers: [ConfigService, WishesService, UsersService],
    controllers: [WishesController],
})
export class WishesModule { }
