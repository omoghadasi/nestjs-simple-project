import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return { id: 1, name: 'omid' };
  }

  @Post('create')
  createUser(@Req() request: Request, @Res() response: Response) {
    console.log(request, response);
    response.send({ id: 2, name: 'ali' });
  }
}
