import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '../base_entity/base_entity.entity';
import { IsEmail, Length, IsUrl, isEmail, IsNotEmpty } from 'class-validator';
import { Wish } from 'src/wishes/wish.entity';
import { WishList } from 'src/wishlists/wishlist.entity';
import { Offer } from 'src/offers/offer.entity';

@Entity({ schema: 'nest_project' })
export class User extends BaseEntity {
  @Column()
  @IsNotEmpty()
  @Length(2, 30)
  username: string;

  @Column()
  @Length(2, 200)
  about: string;

  @Column()
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

  @OneToMany(() => WishList, (wishlist) => wishlist.name)
  wishlists: WishList[];
}
