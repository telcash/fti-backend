import { IsBoolean, IsInt, isNotEmpty, IsNotEmpty } from 'class-validator';

export class CreateJugadorToPartidoDto {
  @IsBoolean()
  convocado: boolean;

  @IsBoolean()
  lesionado: boolean;

  @IsInt()
  minJugados: number;

  @IsInt()
  goles: number;

  @IsInt()
  asistencias: number;

  @IsInt()
  tarjetasAmarillas: number;

  @IsInt()
  tarjetasRojas: number;

  @IsInt()
  valoracion: number;

  @IsNotEmpty()
  @IsInt()
  jugadorId: number;

  @IsNotEmpty()
  @IsInt()
  partidoId: number;
}
