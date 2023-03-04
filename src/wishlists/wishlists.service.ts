import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { WishesService } from 'src/wishes/wishes.service';
import { Repository } from 'typeorm';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { WishList } from './entities/wishlist.entity';

@Injectable()
export class WishlistsService extends TypeOrmCrudService<WishList> {
  constructor(
    @InjectRepository(WishList) wishesListRepository: Repository<WishList>,
    private wishesService: WishesService
  ) {
    super(wishesListRepository);
  }
  async create(createWishlistDto: CreateWishlistDto) {
    const wl = this.repo.create(createWishlistDto);

    if (createWishlistDto.itemsId) {
      wl.items = [];
      for (let i = 0; i < createWishlistDto.itemsId.length; i++) {
        wl.items.push(await this.wishesService.findById(createWishlistDto.itemsId[i]));
      }
    }
    return this.repo.save(wl);
  }
  async findAll() {
    return await this.repo.find({ relations: { items: true, owner: true } });
  }

  async findById(id: number) {
    return await this.repo.findOne({ where: { id }, relations: { items: true } });
  }
  async update(userId: number, id: number, updateWishlistDto: UpdateWishlistDto) {
    const res = await this.findById(id);
    if (res.owner?.id === userId) {
      await this.repo.update(id, updateWishlistDto);
      return res;
    } else
      return null;
  }

  async delete(userId: number, id: number) {
    const res = await this.findById(id);
    if (res.owner?.id === userId) {
      await await this.repo.remove(res);
      return res;
    } else
      return null;

  }

}
