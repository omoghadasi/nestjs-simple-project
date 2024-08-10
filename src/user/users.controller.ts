import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
