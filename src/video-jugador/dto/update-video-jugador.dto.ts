import { PartialType } from '@nestjs/mapped-types';
import { CreateVideoJugadorDto } from './create-video-jugador.dto';

export class UpdateVideoJugadorDto extends PartialType(CreateVideoJugadorDto) {}
