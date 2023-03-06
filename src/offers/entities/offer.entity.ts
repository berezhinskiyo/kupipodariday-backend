import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from '../../base_entity/base_entity.entity';
import { User } from 'src/users/entities/user.entity';
import { Wish } from 'src/wishes/entities/wish.entity';
@Entity({ schema: 'nest_project' })
export class Offer extends BaseEntity {
  @ManyToOne(() => User, (user) => user.offers)
  @JoinColumn()
  user: User;

  @ManyToOne(() => Wish, (wish) => wish.offers, {
    onDelete: 'CASCADE'
  })
  @JoinColumn()
  item: Wish;

  @Column('int', { nullable: true })
  amount: number;

  @Column({
    nullable: true,
    default: true
  })
  hidden: boolean;
}
