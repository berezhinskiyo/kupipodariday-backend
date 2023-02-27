import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Offer } from './offer.entity';

@Injectable()
export class OffersService extends TypeOrmCrudService<Offer> {
  constructor(@InjectRepository(Offer) offersRepository: Repository<Offer>) {
    super(offersRepository);
  }
}
