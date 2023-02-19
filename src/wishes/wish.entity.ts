import { Entity, Column, ManyToOne, ManyToMany, OneToMany } from 'typeorm';
import { BaseEntity } from '../base_entity/base_entity.entity';
import { Length, IsUrl, IsCurrency, MaxLength, IsInt } from 'class-validator';
import { User } from 'src/users/user.entity';
import { Offer } from 'src/offers/offer.entity';
import { WishList } from 'src/wishlists/wishlist.entity';
@Entity()
export class Wish extends BaseEntity {
  @Column()
  @Length(1, 250)
  name: string;

  @Column()
  @Length(1, 1024)
  description: 1500;

  @Column()
  @IsUrl()
  image: string;

  @Column()
  @IsCurrency()
  price: number;

  @Column()
  @IsCurrency()
  raised: number;

  @ManyToOne(() => User, (user) => user.wishes)
  owner: User;

  @OneToMany(() => Offer, (offer) => offer.item)
  offers: Wish[];

  @Column()
  @IsInt()
  copie: number;

  @ManyToMany(() => WishList, (wishlist) => wishlist.items)
  wishlists: WishList[];
}
