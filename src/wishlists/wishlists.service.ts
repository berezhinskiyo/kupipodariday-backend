/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { WishList } from './wishlist.entity';

@Injectable()
export class WishlistsService extends TypeOrmCrudService<WishList> {
  constructor(
    @InjectRepository(WishList) wishesListRepository: Repository<WishList>,
  ) {
    super(wishesListRepository);
  }
}
