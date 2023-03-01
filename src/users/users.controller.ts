import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalGuard } from 'src/guards/local.guard';
import { User } from './user.entity';

@Controller('users')
export class UsersController {

    @Get('me')
    @UseGuards(LocalGuard)
    me(@Request() req: any) {
        console.log(req);
        return req.user.id;
    }
}
