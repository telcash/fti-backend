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

  create(createPosicionDto: CreatePosicionDto): Promise<Posicion> {
    const posicion: Posicion = new Posicion();
    posicion.nombre = createPosicionDto.nombre;
    return this.posicionRepository.save(posicion);
  }

  findAll(): Promise<Posicion[]> {
    return this.posicionRepository.find();
  }

  findOne(id: number): Promise<Posicion> {
    return this.posicionRepository.findOneBy({ id });
  }

  findOneByName(nombre: string): Promise<Posicion> {
    return this.posicionRepository.findOneBy({ nombre: nombre });
  }

  update(id: number, updatePosicionDto: UpdatePosicionDto): Promise<Posicion> {
    const posicion: Posicion = new Posicion();
    posicion.nombre = updatePosicionDto.nombre;
    posicion.id = id;
    return this.posicionRepository.save(posicion);
  }

  remove(id: number): Promise<{ affected?: number }> {
    return this.posicionRepository.delete(id);
  }
}
