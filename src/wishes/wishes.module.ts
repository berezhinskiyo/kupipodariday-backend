import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Wish } from './wish.entity';
import { WishesService } from './wishes.service';

@Module({
    imports: [TypeOrmModule.forFeature([Wish])],
    exports: [WishesService],
    providers: [WishesService]
})
export class WishesModule { }
