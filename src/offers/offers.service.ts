import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { UsersService } from 'src/users/users.service';
import { WishesService } from 'src/wishes/wishes.service';
import { Repository } from 'typeorm';
import { CreateOfferDto } from './dto/create-offers.dto';
import { Offer } from './entities/offer.entity';

@Injectable()
export class OffersService extends TypeOrmCrudService<Offer> {
  constructor(@InjectRepository(Offer) offersRepository: Repository<Offer>,
    private usersService: UsersService,
    private wishesService: WishesService) {
    super(offersRepository);
  }
  async create(userId: number, createOfferDto: CreateOfferDto) {

    const wish = await this.wishesService.findById(createOfferDto.itemId);
    if (wish.owner && wish.owner.id == userId)
      throw new HttpException('Пользователю нельзя вносить деньги на собственные подарки', HttpStatus.UNPROCESSABLE_ENTITY);
    if (wish.raised + createOfferDto.amount > wish.price)
      throw new HttpException('нельзя скинуться на подарки, на которые уже собраны деньги. Сумма собранных средств не может превышать стоимость подарка.', HttpStatus.UNPROCESSABLE_ENTITY);

    (createOfferDto as any).item = wish;
    (createOfferDto as any).user = await this.usersService.findById(userId);

    const offer = this.repo.create(createOfferDto);

    await this.repo.save(offer);
    return {};
  }
  async findAll() {
    return await this.repo.find({ relations: { user: { wishes: true, offers: true }, item: { offers: true, owner: true } } });
  }

  async findById(id: number) {
    return await this.repo.findOne({ where: { id }, relations: { user: { wishes: true, offers: true }, item: { offers: true, owner: true } } });
  }

}
