import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateWishDto } from './dto/create-wishes.dto';
import { Wish } from './entities/wish.entity';

@Injectable()
export class WishesService extends TypeOrmCrudService<Wish> {
  constructor(
    @InjectRepository(Wish) wishesRepository: Repository<Wish>,
    private usersService: UsersService
  ) {
    super(wishesRepository);
  }
  async create(userId: number, createWishDto: CreateWishDto) {
    (createWishDto as any).owner = await this.usersService.findById(userId);

    const wish = this.repo.create(createWishDto);

    return this.repo.save(wish);
  }
  async copy(id: number) {
    const wish = await this.findById(id);
    if (wish) delete wish['id'];
    const res = this.repo.create(wish);
    return this.repo.save(res);
  }


  async getLast() {
    return await this.repo.find({
      order: {
        id: "DESC",
      },
      take: 40,
      relations: {  offers: true }

    });
  }
  async getTop() {
    return await this.repo.find({
      order: {
        copied: "DESC",
      },
      take: 10,
      relations: {  offers: true }

    });
  }
  async findById(id: number) {
    return await this.repo.findOne({
      where: { id },
      relations: { owner: true, wishlists: true, offers: true }
    });
  }

  async delete(userId: number, id: number) {
    const wish = await this.findById(id);
    if (wish.owner.id === userId) {
      await this.repo.delete({ id });
      return wish;
    } else {
      throw new HttpException('Нельзя удалять чужой подарок', HttpStatus.UNPROCESSABLE_ENTITY);
    }
  }

  async update(userId: number, id: number, updateWishDto: CreateWishDto) {
    const wish = await this.findById(id);
    if (!wish.owner || wish.owner.id === userId) {
      if (updateWishDto.price !== wish.price && wish.offers && wish.offers.length > 0)
        throw new HttpException('нельзя изменять стоимость подарка, если уже есть желающие скинуться', HttpStatus.UNPROCESSABLE_ENTITY);

      (updateWishDto as any).owner = await this.usersService.findById(userId);
      await this.repo.update(id, updateWishDto);
      return await this.findById(id);
    } else {
      throw new HttpException('Нельзя править чужой подарок', HttpStatus.UNPROCESSABLE_ENTITY);
    }
  }
}
