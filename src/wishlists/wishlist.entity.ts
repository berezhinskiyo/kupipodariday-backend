import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany } from 'typeorm';
import { BaseEntity } from '../base_entity/base_entity.entity';
import { Length, IsUrl, MaxLength } from 'class-validator';
import { Wish } from 'src/wishes/wish.entity';

@Entity()
export class WishList extends BaseEntity {
  @Column()
  @Length(1, 250)
  name: string;

  @Column()
  @MaxLength(1500)
  description: 1500;

  @Column()
  @IsUrl()
  image: string;
  @ManyToMany(() => Wish, (wish) => wish.wishlists)
  items: Wish[];
}
