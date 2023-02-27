/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { Wish } from './wish.entity';

@Injectable()
export class WishesService extends TypeOrmCrudService<Wish> {
  constructor(
    @InjectRepository(Wish) wishesRepository: Repository<Wish>) {
    super(wishesRepository);
  }
}
