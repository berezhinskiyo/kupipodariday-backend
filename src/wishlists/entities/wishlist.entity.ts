import { Entity, Column, ManyToMany, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../base_entity/base_entity.entity';
import { Length, IsUrl, MaxLength, IsNotEmpty } from 'class-validator';
import { Wish } from 'src/wishes/entities/wish.entity';
import { User } from 'src/users/entities/user.entity';

@Entity({ schema: 'nest_project' })
export class WishList extends BaseEntity {
  @Column()
  @Length(1, 250)
  name: string;

  @Column({ nullable: true })
  @MaxLength(1500)
  description: string;

  @Column({ nullable: true })
  @IsUrl()
  image: string;

  @ManyToMany(() => Wish, (wish) => wish.wishlists)
  items: Wish[];

  @ManyToOne(() => User, (user) => user.wishLists)
  @IsNotEmpty()
  @JoinColumn()
  owner: User;
}
