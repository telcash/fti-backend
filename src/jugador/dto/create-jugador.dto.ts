import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateJugadorDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  apellido: string;

  @IsString()
  @IsOptional()
  apodo: string;

  @IsString()
  fNac: Date;

  @IsOptional()
  peso: number;

  @IsOptional()
  altura: number;

  @IsString()
  @IsOptional()
  telefono: string;

  @IsString()
  @IsOptional()
  nacionalidad: string;

  @IsString()
  @IsOptional()
  iniContrato: Date;

  @IsString()
  @IsOptional()
  finContrato: Date;

  @IsString()
  @IsOptional()
  foto: string;

  @IsString()
  @IsOptional()
  posicion: string;

  @IsString()
  @IsOptional()
  equipo: string;

  @IsOptional()
  posX: number;

  @IsOptional()
  posY: number;
}
