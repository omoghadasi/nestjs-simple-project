import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUser {
  @IsNotEmpty()
  @IsNumber()
  id: number;
  @IsNotEmpty()
  @IsString()
  name: string;
}
