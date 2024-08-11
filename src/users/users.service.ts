import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'omid' },
    { id: 2, name: 'ali' },
    { id: 3, name: 'reza' },
  ];

  fetchAllUsers() {
    return this.users;
  }

  fetchUserById(id: number) {
    const user = this.users.find((user) => user.id == id);
    if (!user) {
      throw new HttpException('User Not Found', HttpStatus.BAD_REQUEST);
    }
    return user;
  }

  createUser(userDetail: CreateUserType) {
    const hasUser = this.users.find((user) => user.id == userDetail.id);
    if (hasUser) {
      throw new HttpException('User has been exist', HttpStatus.BAD_REQUEST);
    }
    this.users.push(userDetail);
    return userDetail;
  }
}
