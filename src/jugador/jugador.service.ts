import { Injectable } from '@nestjs/common';
import { CreateJugadorDto } from './dto/create-jugador.dto';
import { UpdateJugadorDto } from './dto/update-jugador.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Jugador } from './entities/jugador.entity';
import { Repository } from 'typeorm';

@Injectable()
export class JugadorService {
  constructor(
    @InjectRepository(Jugador)
    private readonly jugadorRepository: Repository<Jugador>,
  ) {}

  create(createJugadorDto: CreateJugadorDto): Promise<Jugador> {
    const jugador: Jugador = new Jugador();
    jugador.nombre = createJugadorDto.nombre;
    jugador.apellido = createJugadorDto.apellido;
    jugador.apodo = createJugadorDto.apodo;
    jugador.fNac = createJugadorDto.fNac;
    jugador.iniContrato = createJugadorDto.iniContrato;
    jugador.finContrato = createJugadorDto.finContrato;
    jugador.foto = createJugadorDto.foto;
    return this.jugadorRepository.save(jugador);
  }

  findAll(): Promise<Jugador[]> {
    return this.jugadorRepository.find();
  }

  findOne(id: number): Promise<Jugador> {
    return this.jugadorRepository.findOneBy({ id });
  }

  update(id: number, updateJugadorDto: UpdateJugadorDto): Promise<Jugador> {
    const jugador: Jugador = new Jugador();
    jugador.nombre = updateJugadorDto.nombre;
    jugador.apellido = updateJugadorDto.apellido;
    jugador.apodo = updateJugadorDto.apodo;
    jugador.fNac = updateJugadorDto.fNac;
    jugador.iniContrato = updateJugadorDto.iniContrato;
    jugador.finContrato = updateJugadorDto.finContrato;
    jugador.foto = updateJugadorDto.foto;
    jugador.id = id;
    return this.jugadorRepository.save(jugador);
  }

  remove(id: number): Promise<{ affected?: number }> {
    return this.jugadorRepository.delete(id);
  }
}
