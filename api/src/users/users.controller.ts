import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser } from '../interfaces/IUser';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    getAllUsers() {
        return this.usersService.getAllUsers();
    }

    @Post()
    addUser(@Body() user: IUser) {
        return this.usersService.addUser(user);
    }

    @Delete(':index')
    deleteUser(@Param('index') index: string) {
        const indexNum = Number.parseInt(index, 10);
        return this.usersService.deleteUser(indexNum);
    }
}
