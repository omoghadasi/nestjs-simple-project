import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUser } from './dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(@Query('sortBy') sortBy: string) {
    console.log(sortBy);
    return [
      { id: 1, name: 'omid' },
      { id: 2, name: 'ali' },
      { id: 3, name: 'reza' },
      { id: 4, name: 'javad' },
      { id: 5, name: 'hamid' },
      { id: 6, name: 'sina' },
    ];
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
