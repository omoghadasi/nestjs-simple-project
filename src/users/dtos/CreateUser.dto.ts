import { IsNotEmpty } from 'class-validator';

export class CreateUser {
  @IsNotEmpty()
  id: number;
  @IsNotEmpty()
  name: string;
}
