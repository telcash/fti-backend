import { IsEnum, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export enum TipoFundamento {
  DEFENSIVO = 'Defensivo',
  OFENSIVO = 'Ofensivo',
}

export class CreateFundamentoDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  nombre: string;

  @IsEnum(TipoFundamento)
  tipo: TipoFundamento;
}
