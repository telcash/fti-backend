import { Injectable } from '@nestjs/common';
import { CreateSesionIndividualDto } from './dto/create-sesion-individual.dto';
import { UpdateSesionIndividualDto } from './dto/update-sesion-individual.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SesionIndividual } from './entities/sesion-individual.entity';
import { Repository } from 'typeorm';
import { JugadorService } from 'src/jugador/jugador.service';

@Injectable()
export class SesionIndividualService {
  constructor(
    @InjectRepository(SesionIndividual)
    private readonly sesionIndividualRepository: Repository<SesionIndividual>,
    private readonly jugadorService: JugadorService,
  ) {}

  async create(
    createSesionIndividualDto: CreateSesionIndividualDto,
  ): Promise<SesionIndividual> {
    const sesionIndividual: SesionIndividual = new SesionIndividual();
    sesionIndividual.fecha = createSesionIndividualDto.fecha;
    sesionIndividual.jugador = await this.jugadorService.findOne(
      createSesionIndividualDto.jugadorId,
    );
    return await this.sesionIndividualRepository.save(sesionIndividual);
  }

  async findAll(): Promise<SesionIndividual[]> {
    return await this.sesionIndividualRepository.find({
      relations: ['jugador', 'ejercicios', 'ejercicios.fundamento'],
    });
  }

  async findOne(id: number): Promise<SesionIndividual> {
    return await this.sesionIndividualRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateSesionIndividualDto: UpdateSesionIndividualDto,
  ): Promise<SesionIndividual> {
    const sesionIndividual: SesionIndividual = new SesionIndividual();
    sesionIndividual.fecha = updateSesionIndividualDto.fecha;
    sesionIndividual.jugador = await this.jugadorService.findOne(
      updateSesionIndividualDto.jugadorId,
    );
    sesionIndividual.id = id;
    return await this.sesionIndividualRepository.save(sesionIndividual);
  }

  async remove(id: number): Promise<{ affected?: number }> {
    return await this.sesionIndividualRepository.delete(id);
  }
}
