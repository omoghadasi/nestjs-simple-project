import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [UsersService],
})
export class AppModule {}
