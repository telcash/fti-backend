import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePosicionDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;
}
