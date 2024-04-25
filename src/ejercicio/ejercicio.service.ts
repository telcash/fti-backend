import { Injectable } from '@nestjs/common';
import { CreateEjercicioDto } from './dto/create-ejercicio.dto';
import { UpdateEjercicioDto } from './dto/update-ejercicio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ejercicio } from './entities/ejercicio.entity';
import { Repository } from 'typeorm';
import { SesionIndividualService } from 'src/sesion-individual/sesion-individual.service';
import { FundamentoService } from 'src/fundamento/fundamento.service';

@Injectable()
export class EjercicioService {
  constructor(
    @InjectRepository(Ejercicio)
    private readonly ejercicioRepository: Repository<Ejercicio>,
    private readonly fundamentoService: FundamentoService,
    private readonly sesionIndividualService: SesionIndividualService,
  ) {}

  async create(createEjercicioDto: CreateEjercicioDto): Promise<Ejercicio> {
    const ejercicio: Ejercicio = new Ejercicio();
    ejercicio.valoracion = createEjercicioDto.valoracion;
    ejercicio.fundamento = await this.fundamentoService.findOneByName(
      createEjercicioDto.fundamentoName,
    );
    ejercicio.sesionIndividual = await this.sesionIndividualService.findOne(
      createEjercicioDto.sesionIndividualId,
    );
    return this.ejercicioRepository.save(ejercicio);
  }

  findAll(): Promise<Ejercicio[]> {
    return this.ejercicioRepository.find();
  }

  findOne(id: number): Promise<Ejercicio> {
    return this.ejercicioRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateEjercicioDto: UpdateEjercicioDto,
  ): Promise<Ejercicio> {
    const ejercicio: Ejercicio = new Ejercicio();
    ejercicio.valoracion = updateEjercicioDto.valoracion;
    ejercicio.fundamento = await this.fundamentoService.findOneByName(
      updateEjercicioDto.fundamentoName,
    );
    ejercicio.sesionIndividual = await this.sesionIndividualService.findOne(
      updateEjercicioDto.sesionIndividualId,
    );
    ejercicio.id = id;
    return this.ejercicioRepository.save(ejercicio);
  }

  remove(id: number): Promise<{ affected?: number }> {
    return this.ejercicioRepository.delete(id);
  }
}
