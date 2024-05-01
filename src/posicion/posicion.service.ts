import { Injectable } from '@nestjs/common';
import { CreatePosicionDto } from './dto/create-posicion.dto';
import { UpdatePosicionDto } from './dto/update-posicion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Posicion } from './entities/posicion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PosicionService {
  constructor(
    @InjectRepository(Posicion)
    private readonly posicionRepository: Repository<Posicion>,
  ) {}

  async create(createPosicionDto: CreatePosicionDto): Promise<Posicion> {
    const posicion: Posicion = new Posicion();
    posicion.nombre = createPosicionDto.nombre;
    return await this.posicionRepository.save(posicion);
  }

  async findAll(): Promise<Posicion[]> {
    return await this.posicionRepository.find();
  }

  async findOne(id: number): Promise<Posicion> {
    return await this.posicionRepository.findOneBy({ id });
  }

  async findOneByName(nombre: string): Promise<Posicion> {
    return await this.posicionRepository.findOneBy({ nombre: nombre });
  }

  async update(
    id: number,
    updatePosicionDto: UpdatePosicionDto,
  ): Promise<Posicion> {
    const posicion: Posicion = new Posicion();
    posicion.nombre = updatePosicionDto.nombre;
    posicion.id = id;
    return await this.posicionRepository.save(posicion);
  }

  async remove(id: number): Promise<{ affected?: number }> {
    return await this.posicionRepository.delete(id);
  }
}
