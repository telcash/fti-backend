import { IsDate, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreatePartidoDto {
  @IsDate()
  @IsNotEmpty()
  fecha: Date;

  @IsString()
  resultado: string;

  @IsInt()
  equipoLocalId: number;

  @IsInt()
  equipoVisitanteId: number;
}
