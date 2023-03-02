import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
  constructor(@InjectRepository(User) usersRepository: Repository<User>) {
    super(usersRepository);
  }
  async create(createUserDto: CreateUserDto) {

    const user = await this.repo.create(createUserDto);
    return this.repo.save(user);
  }

  async findMany(query: FindOptionsWhere<User> | FindOptionsWhere<User>[]) {
    const user = await this.repo.find({ where:  query  });
    return user;
  }

  async findByUsername(username: string) {
    const user = await this.repo.findOne({ where: { username } });
    delete user['password'];
    return user;
  }

  async findById(id: number) {

    const user = await this.repo.findOne({ where: { id } });
    delete user['password'];
    return user;
  }

  async getWishes(id: number) {

    const user = await this.repo.findOne({
      where: { id },
      relations: { wishes: true, offers: true, wishlists: true }
    });
    delete user['password'];
    return user;
  }

  async getWishesByUsername(username: string) {

    const user = await this.repo.findOne({
      where: { username },
      relations: { wishes: true, offers: true, wishlists: true }
    });
    delete user['password'];
    return user;
  }
  async update(id: number, obj: UpdateUserDto) {

    const user = await this.repo.update(id, obj);
    delete user['password'];

    return user;
  }
}
