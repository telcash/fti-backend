import { Injectable } from '@nestjs/common';
import { CreateJugadorDto } from './dto/create-jugador.dto';
import { UpdateJugadorDto } from './dto/update-jugador.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Jugador } from './entities/jugador.entity';
import { Repository } from 'typeorm';
import { EquipoService } from 'src/equipo/equipo.service';
import { PosicionService } from 'src/posicion/posicion.service';
import { StorageService } from 'src/common/services/storage.service';

@Injectable()
export class JugadorService {
  constructor(
    @InjectRepository(Jugador)
    private readonly jugadorRepository: Repository<Jugador>,
    private readonly equipoService: EquipoService,
    private readonly posicionService: PosicionService,
    private readonly storageService: StorageService,
  ) {}

  async create(
    createJugadorDto: CreateJugadorDto,
    imageName: string,
  ): Promise<Jugador> {
    const jugador: Jugador = new Jugador();
    jugador.nombre = createJugadorDto.nombre;
    jugador.apellido = createJugadorDto.apellido;
    jugador.apodo = createJugadorDto.apodo;
    jugador.fNac = createJugadorDto.fNac;
    jugador.peso = createJugadorDto.peso ? createJugadorDto.peso : null;
    jugador.altura = createJugadorDto.altura ? createJugadorDto.altura : null;
    jugador.telefono = createJugadorDto.telefono;
    jugador.nacionalidad = createJugadorDto.nacionalidad;
    jugador.iniContrato = createJugadorDto.iniContrato;
    jugador.finContrato = createJugadorDto.finContrato;
    jugador.foto = imageName;
    jugador.posicion = createJugadorDto.posicion
      ? await this.posicionService.findOneByName(createJugadorDto.posicion)
      : null;
    jugador.equipo = createJugadorDto.equipo
      ? await this.equipoService.findOneByName(createJugadorDto.equipo)
      : null;
    return this.jugadorRepository.save(jugador);
  }

  findAll(): Promise<Jugador[]> {
    return this.jugadorRepository.find({
      relations: ['posicion', 'equipo'],
    });
  }

  findAllWithRelations(): Promise<Jugador[]> {
    return this.jugadorRepository.find({
      relations: [
        'posicion',
        'equipo',
        'sesionesIndividuales',
        'sesionesIndividuales.ejercicios',
        'sesionesIndividuales.ejercicios.fundamento',
      ],
    });
  }

  findOne(id: number): Promise<Jugador> {
    return this.jugadorRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateJugadorDto: UpdateJugadorDto,
    fileName: string,
  ): Promise<Jugador> {
    const jugador = await this.jugadorRepository.findOne({
      where: { id },
      relations: ['posicion', 'equipo'],
    });
    console.log(jugador);
    const jugadorUpdated: Jugador = new Jugador();
    const oldImage: string = jugador.foto;
    if (fileName) {
      if (oldImage) {
        this.storageService.deleteFile(
          this.storageService.imagesDestination + 'jugadores',
          oldImage,
        );
      }
      jugadorUpdated.foto = fileName;
    } else {
      jugadorUpdated.foto = oldImage;
    }

    jugadorUpdated.nombre = updateJugadorDto.nombre || jugador.nombre;
    jugadorUpdated.apellido = updateJugadorDto.apellido || jugador.apellido;
    jugadorUpdated.apodo = updateJugadorDto.apodo;
    jugadorUpdated.fNac = updateJugadorDto.fNac;
    jugadorUpdated.peso = updateJugadorDto.peso ? updateJugadorDto.peso : null;
    jugadorUpdated.altura = updateJugadorDto.altura
      ? updateJugadorDto.altura
      : null;
    jugadorUpdated.telefono = updateJugadorDto.telefono;
    jugadorUpdated.nacionalidad = updateJugadorDto.nacionalidad;
    jugadorUpdated.iniContrato = updateJugadorDto.iniContrato;
    jugadorUpdated.finContrato = updateJugadorDto.finContrato;
    jugadorUpdated.posicion = updateJugadorDto.posicion
      ? await this.posicionService.findOneByName(updateJugadorDto.posicion)
      : jugador.posicion;
    jugadorUpdated.equipo = updateJugadorDto.equipo
      ? await this.equipoService.findOneByName(updateJugadorDto.equipo)
      : jugador.equipo;

    jugadorUpdated.posX = jugador.posX;
    jugadorUpdated.posY = jugador.posY;
    jugadorUpdated.id = id;
    return this.jugadorRepository.save(jugadorUpdated);
  }

  async updatePosition(
    id: number,
    updateJugadorDto: UpdateJugadorDto,
  ): Promise<Jugador> {
    const jugador = await this.jugadorRepository.findOne({
      where: { id },
      relations: ['posicion', 'equipo'],
    });
    const jugadorUpdated: Jugador = new Jugador();
    jugadorUpdated.foto = jugador.foto;
    jugadorUpdated.nombre = jugador.nombre;
    jugadorUpdated.apellido = jugador.apellido;
    jugadorUpdated.apodo = jugador.apodo;
    jugadorUpdated.fNac = jugador.fNac;
    jugadorUpdated.peso = jugador.peso;
    jugadorUpdated.altura = jugador.altura;
    jugadorUpdated.telefono = jugador.telefono;
    jugadorUpdated.nacionalidad = jugador.nacionalidad;
    jugadorUpdated.iniContrato = jugador.iniContrato;
    jugadorUpdated.finContrato = jugador.finContrato;
    jugadorUpdated.posicion = jugador.posicion;
    jugadorUpdated.equipo = jugador.equipo;
    jugadorUpdated.posX =
      updateJugadorDto.posX === undefined
        ? jugador.posX
        : updateJugadorDto.posX;
    jugadorUpdated.posY =
      updateJugadorDto.posY === undefined
        ? jugador.posY
        : updateJugadorDto.posY;
    jugadorUpdated.id = id;
    return this.jugadorRepository.save(jugadorUpdated);
  }

  async remove(id: number): Promise<{ affected?: number }> {
    const jugador = await this.jugadorRepository.findOneBy({ id });
    if (jugador && jugador.foto) {
      this.storageService.deleteFile(
        this.storageService.imagesDestination + 'jugadores/',
        jugador.foto,
      );
    }
    return await this.jugadorRepository.delete(id);
  }
}
