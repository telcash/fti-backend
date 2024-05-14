import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEjercicioDto {
  @IsNotEmpty()
  valoracion: number;

  @IsNotEmpty()
  valoracionMaxima: number;

  valoracionFisica: number;

  valoracionTecnica: number;

  valoracionTactica: number;

  valoracionPsicologica: number;

  observaciones: string;

  @IsString()
  @IsNotEmpty()
  fundamentoName: string;

  @IsNotEmpty()
  sesionIndividualId: number;
}
