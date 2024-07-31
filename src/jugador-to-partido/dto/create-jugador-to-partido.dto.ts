import { IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateJugadorToPartidoDto {
  @IsBoolean()
  convocado: boolean;

  @IsBoolean()
  lesionado: boolean;

  minJugados: number;

  titular: boolean;

  goles: number;

  asistencias: number;

  tarjetasAmarillas: number;

  tarjetasRojas: number;

  valoracion: number;

  @IsNotEmpty()
  jugadorId: number;

  @IsNotEmpty()
  partidoId: number;
}
