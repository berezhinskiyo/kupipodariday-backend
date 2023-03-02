import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { CreateOfferDto } from './dto/create-offers.dto';
import { Offer } from './offer.entity';

@Injectable()
export class OffersService extends TypeOrmCrudService<Offer> {
  constructor(@InjectRepository(Offer) offersRepository: Repository<Offer>) {
    super(offersRepository);
  }
  async create(createOfferDto: CreateOfferDto) {
    const wish = this.repo.create(createOfferDto);
    return this.repo.save(wish);
  }
  async findAll() {
    return await this.repo.find();
  }

  async findById(id: number) {
    return await this.repo.findOne({ where: { id } });
  }

}
