import { Injectable } from '@nestjs/common';
import { User } from '../users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) { }

  auth(user: User) {
    const payload = { sub: user.id };
    return { access_token: this.jwtService.sign(payload) };
  }

  async validatePassword(username: string, password: string) {
    const user = await this.usersService.findByUsername(username);
    if (user && compare(password, user.password)) {
      return user;
    }

    return null;
  }
  async validateUserId(id: number) {
    const user = await this.usersService.findById(id);

    if (user) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }
}