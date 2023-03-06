import { Controller, Get, UseGuards, Request, Patch, Body, Param, Post } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';


@Controller('users')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class UsersController {
    constructor(private usersService: UsersService) { }
    @Get('me')
    me(@Request() req: any) {
        return this.usersService.findById(req.user.id);
    }

    @Patch('me')
    @ApiResponse({ status: 400, description: "Пользователь не найден" })
    update(@Body() user: UpdateUserDto, @Request() req: any) {
        return this.usersService.update(req.user.id, user);
    }
    @Get('me/wishes')
    getWishes(@Request() req: any) {
        return this.usersService.getWishes(req.user.id);
    }
    @Post('find')
    getUsers(@Body() user: { query: string }) {
        return this.usersService.findMany([{ username: user.query }, { email: user.query }]);
    }
    @Get(':username')
    getUser(@Param('username') username: string) {
        return this.usersService.findByUsername(username);
    }

    @Get(':username/wishes')
    getUserWishes(@Param('username') username: string) {
        return this.usersService.getWishesByUsername(username);
    }


}
