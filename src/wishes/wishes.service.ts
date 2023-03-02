import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { FindOptionsOrderValue, Repository } from 'typeorm';
import { CreateWishDto } from './dto/create-wishes.dto';
import { Wish } from './wish.entity';

@Injectable()
export class WishesService extends TypeOrmCrudService<Wish> {
  constructor(
    @InjectRepository(Wish) wishesRepository: Repository<Wish>) {
    super(wishesRepository);
  }
  async create(createWishDto: CreateWishDto) {

    const wish = await this.repo.create(createWishDto);
    return this.repo.save(wish);
  }
  async copy(id: number) {
    const wish = await this.repo.findOne({ where: { id } });
    const res = await this.repo.create(wish);
    return this.repo.save(res);
  }

  async getUtmost(order: FindOptionsOrderValue) {
    const wishes = await this.repo.find({
      order: {
        id: order,
      },
    });
    if (wishes.length > 0) return wishes[0];
    return null;
  }
  async getLast() {
    return this.getUtmost("DESC");
  }
  async getFirst() {
    return this.getUtmost("ASC");
  }
  async findById(id: number) {
    return await this.repo.findOne({ where: { id } });
  }

  async delete(id: number) {
    return await this.repo.delete({ id });
  }
}
