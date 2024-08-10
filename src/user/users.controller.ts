import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUser } from './dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return { id: 1, name: 'omid' };
  }

  @Post('create')
  createUser(@Body() userData: CreateUser) {
    return userData;
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return { id };
  }
}
