import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { WishList } from './wishlist.entity';

@Injectable()
export class WishlistsService extends TypeOrmCrudService<WishList> {
  constructor(
    @InjectRepository(WishList) wishesListRepository: Repository<WishList>,
  ) {
    super(wishesListRepository);
  }
  async create(createWishlistDto: CreateWishlistDto) {
    const wl = this.repo.create(createWishlistDto);
    return this.repo.save(wl);
  }
  async findAll() {
    return await this.repo.find();
  }

  async findById(id: number) {
    return await this.repo.findOne({ where: { id } });
  }
  async update(id: number, updateWishlistDto: UpdateWishlistDto) {
    return await this.repo.update(id, updateWishlistDto);
  }

  async delete(id: number) {
    return await this.repo.delete(id);
  }

}
