import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Offer } from './offer.entity';
import { OffersController } from './offers.controller';
import { OffersService } from './offers.service';

@Module({
    imports: [TypeOrmModule.forFeature([Offer])],
    exports: [OffersService],
    providers: [OffersService],
    controllers: [OffersController],
})
export class OffersModule { }
