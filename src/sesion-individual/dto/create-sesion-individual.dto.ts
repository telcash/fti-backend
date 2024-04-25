import { IsArray, IsDate, IsInt, IsNotEmpty } from 'class-validator';

export class CreateSesionIndividualDto {
  @IsDate()
  @IsNotEmpty()
  fecha: Date;

  @IsInt()
  @IsNotEmpty()
  jugadorId: number;

  @IsArray()
  ejerciciosIds: number[];
}
