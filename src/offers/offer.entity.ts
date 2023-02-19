import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from '../base_entity/base_entity.entity';
import { IsCurrency, IsInt, MaxLength, IsBoolean } from 'class-validator';
import { User } from 'src/users/user.entity';
import { Wish } from 'src/wishes/wish.entity';
@Entity()
export class Offer extends BaseEntity {
  @ManyToOne(() => User, (user) => user.offers)
  user: User;

  @ManyToOne(() => Wish, (wish) => wish.offers)
  item: Wish;

  @Column()
  @IsCurrency()
  amount: number;

  @Column()
  @IsBoolean()
  hidden: boolean;
}
