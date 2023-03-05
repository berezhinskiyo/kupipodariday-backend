
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private authService: AuthService,
    private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('jwt_secret'),
    });

  }

  async validate(payload: any) {
    const { sub, username, password } = payload;
    if (sub) {
      const user = await this.authService.validateUserId(parseInt(sub));

      if (!user) {
        throw new UnauthorizedException();
      }
      return user;
    } else {

      const user = await this.authService.validatePassword(username, password);

      if (!user) {
        throw new UnauthorizedException();
      }

      return user;
    }
  }
}