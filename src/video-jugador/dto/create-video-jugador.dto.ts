import { IsNotEmpty, IsString } from 'class-validator';

export class CreateVideoJugadorDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  url: string;

  @IsNotEmpty()
  jugadorId: number;
}
