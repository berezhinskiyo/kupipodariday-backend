import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
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

  async findByUsername(username: string) {
    const user = await this.repo.findOne({ where: { username } });

    return user;
  }
}
