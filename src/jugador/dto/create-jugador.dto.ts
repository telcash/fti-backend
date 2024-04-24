import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateJugadorDto {
  @IsString()
  @MinLength(2)
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @MinLength(2)
  @IsNotEmpty()
  apellido: string;

  @IsString()
  apodo: string;

  @IsDate()
  fNac: Date;

  @IsDate()
  iniContrato: Date;

  @IsDate()
  finContrato: Date;

  @IsString()
  foto: string;

  @IsInt()
  posicion: string;

  @IsString()
  equipo: string;
}
