import { Injectable } from '@nestjs/common';
import { CreateSesionIndividualDto } from './dto/create-sesion-individual.dto';
import { UpdateSesionIndividualDto } from './dto/update-sesion-individual.dto';

@Injectable()
export class SesionIndividualService {
  create(createSesionIndividualDto: CreateSesionIndividualDto) {
    return 'This action adds a new sesionIndividual';
  }

  findAll() {
    return `This action returns all sesionIndividual`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sesionIndividual`;
  }

  update(id: number, updateSesionIndividualDto: UpdateSesionIndividualDto) {
    return `This action updates a #${id} sesionIndividual`;
  }

  remove(id: number) {
    return `This action removes a #${id} sesionIndividual`;
  }
}
