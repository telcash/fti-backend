import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateEquipoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsOptional()
  foto: string;
}
