import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { genSaltSync, hash } from 'bcrypt';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
  constructor(@InjectRepository(User) usersRepository: Repository<User>,
    private configService: ConfigService) {
    super(usersRepository);
  }
  deletePasswordAndEmail = (user: User) => {
    if (user) {
      delete user['password'];
      delete user['email'];
    }
  }
  async create(createUserDto: CreateUserDto) {

    const user = await this.repo.create(createUserDto);
    return this.repo.save(user);
  }

  async findMany(query: FindOptionsWhere<User> | FindOptionsWhere<User>[]) {
    const users = await this.repo.find({ where: query, relations: { wishes: true, offers: true, wishLists: true } });
    users.forEach((user) => this.deletePasswordAndEmail(user));
    return users;
  }

  async findByUsername(username: string) {
    const user = await this.repo.findOne({
      where: { username }

    });
    return user;
  }

  async findByUsernameWithoutPassword(username: string) {
    const user = await this.repo.findOne({
      where: { username }

    });
    this.deletePasswordAndEmail(user);
    return user;
  }

  async findById(id: number) {

    const user = await this.repo.findOne({
      where: { id }
    });
    if (user) delete user['password'];
    return user;
  }

  async getWishes(id: number) {

    const user = await this.repo.findOne({
      where: { id },
      relations: { wishes: true, offers: true, wishLists: true }
    });
    this.deletePasswordAndEmail(user)
    return user;
  }

  async getWishesByUsername(username: string) {

    const user = await this.repo.findOne({
      where: { username },
      relations: { wishes: true, offers: true, wishLists: true }
    });
    this.deletePasswordAndEmail(user)
    return user;
  }

  async update(id: number, obj: UpdateUserDto) {

    const salt = Number.parseInt(this.configService.get<string>('salt'));
    obj.password = await hash(obj.password, await genSaltSync(salt));
    await this.repo.update(id, obj);
    return await this.findById(id);
  }
}
