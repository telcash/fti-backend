import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePosicionDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;
}
