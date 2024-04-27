import { Injectable } from '@nestjs/common';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { Equipo } from './entities/equipo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EquipoService {
  constructor(
    @InjectRepository(Equipo)
    private readonly equipoRepository: Repository<Equipo>,
  ) {}

  async create(
    createEquipoDto: CreateEquipoDto,
    imageName: string,
  ): Promise<Equipo> {
    const equipo: Equipo = new Equipo();
    equipo.nombre = createEquipoDto.nombre;
    equipo.foto = imageName;
    return this.equipoRepository.save(equipo);
  }

  findAll(): Promise<Equipo[]> {
    return this.equipoRepository.find();
  }

  findOne(id: number): Promise<Equipo> {
    return this.equipoRepository.findOneBy({ id });
  }

  findOneByName(nombre: string): Promise<Equipo> {
    return this.equipoRepository.findOneBy({ nombre });
  }

  update(id: number, updateEquipoDto: UpdateEquipoDto): Promise<Equipo> {
    const equipo: Equipo = new Equipo();
    equipo.nombre = updateEquipoDto.nombre;
    equipo.id = id;
    return this.equipoRepository.save(equipo);
  }

  remove(id: number): Promise<{ affected?: number }> {
    return this.equipoRepository.delete(id);
  }
}
