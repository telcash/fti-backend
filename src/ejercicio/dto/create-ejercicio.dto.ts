import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateEjercicioDto {
  @IsInt()
  @IsNotEmpty()
  valoracion: number;

  @IsString()
  @IsNotEmpty()
  fundamentoName: string;

  @IsInt()
  @IsNotEmpty()
  sesionIndividualId: number;
}
