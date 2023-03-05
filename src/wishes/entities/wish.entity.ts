import { Entity, Column, ManyToOne, ManyToMany, OneToMany, JoinTable, JoinColumn, AfterLoad } from 'typeorm';
import { BaseEntity } from '../../base_entity/base_entity.entity';
import { Length, IsUrl, IsNotEmpty, IsOptional } from 'class-validator';
import { User } from 'src/users/entities/user.entity';
import { Offer } from 'src/offers/entities/offer.entity';
import { WishList } from 'src/wishlists/entities/wishlist.entity';
@Entity({ schema: 'nest_project' })
export class Wish extends BaseEntity {
  @Column()
  @Length(1, 250)
  name: string;

  @Column({ nullable: true })
  @Length(1, 1024)
  description: string;

  @Column({ nullable: true })
  @IsUrl()
  image: string;

  @Column({ nullable: true })
  @IsUrl()
  link: string;

  @Column('int', { nullable: true })
  price: number;

  @IsOptional()
  public raised: number;

  @AfterLoad()
  generateRaised(): void {
    this.raised = this.offers ? this.offers.reduce((sum, current) => sum + current.amount, 0) : 0;
  }


  @ManyToOne(() => User, (user) => user.wishes)
  @IsNotEmpty()
  @JoinColumn()
  owner: User;

  @OneToMany(() => Offer, (offer) => offer.item)
  offers: Offer[];

  @Column('int', { nullable: true })
  copied: number;

  @ManyToMany(() => WishList, (wishlist) => wishlist.items)
  @JoinTable()
  wishlists: WishList[];
}
