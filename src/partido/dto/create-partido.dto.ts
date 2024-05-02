import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreatePartidoDto {
  @IsNotEmpty()
  fecha: Date;

  @IsString()
  resultado: string;

  equipoLocalId: number;

  equipoVisitanteId: number;
}
