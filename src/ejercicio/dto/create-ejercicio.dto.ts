import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEjercicioDto {
  @IsNotEmpty()
  valoracion: number;

  @IsNotEmpty()
  valoracionMaxima: number;

  @IsString()
  @IsNotEmpty()
  fundamentoName: string;

  @IsNotEmpty()
  sesionIndividualId: number;
}
