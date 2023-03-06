import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { hash, genSaltSync } from "bcrypt";

import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { SigninUserDto } from './dto/signin-user.dto';
import { ConfigService } from '@nestjs/config';


@Controller()
export class AuthController {
  constructor(
    private configService: ConfigService,
    private usersService: UsersService,
    private authService: AuthService,
  ) { }

  @Post('signin')
  async signin(@Body() req: SigninUserDto) {
    const user = await this.authService.validatePassword(req.username, req.password);
    return this.authService.auth(user);
  }

  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto) {
    const salt = Number.parseInt(this.configService.get<string>('salt'));
    createUserDto.password = await hash(createUserDto.password, await genSaltSync(salt));
    const user = await this.usersService.create(createUserDto);
    return this.authService.auth(user);
  }
}