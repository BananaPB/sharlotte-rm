import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }   

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<User>{
        return this.usersService.findOne(id);
    }

    @Post()
    async create(@Body() user: User): Promise<User> {
        return this.usersService.create(user);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() user: User): Promise<User> {
        return this.usersService.update(id, user);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return this.usersService.delete(id);
    }
}
