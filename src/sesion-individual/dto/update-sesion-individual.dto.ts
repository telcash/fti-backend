import { PartialType } from '@nestjs/mapped-types';
import { CreateSesionIndividualDto } from './create-sesion-individual.dto';

export class UpdateSesionIndividualDto extends PartialType(CreateSesionIndividualDto) {}
