import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreatePartidoDto {
  @IsNotEmpty()
  fecha: Date;

  /* @IsString()
  resultado: string; */
  golesLocal: number;

  golesVisitante: number;

  equipoLocalId: number;

  equipoVisitanteId: number;
}
