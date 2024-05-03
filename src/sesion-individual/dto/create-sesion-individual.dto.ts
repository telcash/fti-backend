import { IsArray, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateSesionIndividualDto {
  @IsNotEmpty()
  fecha: Date;

  @IsNotEmpty()
  jugadorId: number;

  @IsOptional()
  @IsArray()
  ejerciciosIds: number[];
}
