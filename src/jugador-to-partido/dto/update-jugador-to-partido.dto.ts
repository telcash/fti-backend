import { PartialType } from '@nestjs/mapped-types';
import { CreateJugadorToPartidoDto } from './create-jugador-to-partido.dto';

export class UpdateJugadorToPartidoDto extends PartialType(
  CreateJugadorToPartidoDto,
) {}
