import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '../../base_entity/base_entity.entity';
import { IsEmail, Length, IsUrl, IsNotEmpty } from 'class-validator';
import { Wish } from 'src/wishes/entities/wish.entity';
import { Offer } from 'src/offers/entities/offer.entity';
import { WishList } from 'src/wishlists/entities/wishlist.entity';

@Entity({ schema: 'nest_project' })
export class User extends BaseEntity {
  @Column()
  @IsNotEmpty()
  @Length(2, 30)
  username: string;

  @Column({ nullable: true })
  @Length(2, 200)
  about: string;

  @Column({ nullable: true })
  @IsUrl()
  avatar: string;

  @Column()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Column()
  @IsNotEmpty()
  password: string;

  @OneToMany(() => Wish, (wish) => wish.owner)
  wishes: Wish[];

  @OneToMany(() => Offer, (offer) => offer.user)
  offers: Offer[];

  @OneToMany(() => WishList, (wl) => wl.owner)
  wishLists: WishList[];

}
