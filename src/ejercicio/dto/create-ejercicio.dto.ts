import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateEjercicioDto {
  @IsNotEmpty()
  valoracion: number;

  @IsString()
  @IsNotEmpty()
  fundamentoName: string;

  @IsNotEmpty()
  sesionIndividualId: number;
}
