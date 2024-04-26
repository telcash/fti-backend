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
    jugador.iniContrato = createJugadorDto.iniContrato;
    jugador.finContrato = createJugadorDto.finContrato;
    jugador.foto = imageName;
    jugador.posicion = await this.posicionService.findOneByName(
      createJugadorDto.posicion,
    );
    jugador.equipo = await this.equipoService.findOneByName(
      createJugadorDto.equipo,
    );
    return this.jugadorRepository.save(jugador);
  }

  findAll(): Promise<Jugador[]> {
    return this.jugadorRepository.find();
  }

  findOne(id: number): Promise<Jugador> {
    return this.jugadorRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateJugadorDto: UpdateJugadorDto,
    fileName: string,
  ): Promise<Jugador> {
    const jugador: Jugador = new Jugador();
    if (fileName) {
      const oldImage: string = (await this.jugadorRepository.findOneBy({ id }))
        .foto;
      if (oldImage) {
        this.storageService.deleteFile(
          this.storageService.imagesDestination,
          oldImage,
        );
      }
      jugador.foto = fileName;
    }
    jugador.nombre = updateJugadorDto.nombre;
    jugador.apellido = updateJugadorDto.apellido;
    jugador.apodo = updateJugadorDto.apodo;
    jugador.fNac = updateJugadorDto.fNac;
    jugador.iniContrato = updateJugadorDto.iniContrato;
    jugador.finContrato = updateJugadorDto.finContrato;
    jugador.posicion = await this.posicionService.findOneByName(
      updateJugadorDto.posicion,
    );
    jugador.equipo = await this.equipoService.findOneByName(
      updateJugadorDto.equipo,
    );
    jugador.id = id;
    return this.jugadorRepository.save(jugador);
  }

  async remove(id: number): Promise<{ affected?: number }> {
    const jugador = await this.jugadorRepository.findOneBy({ id });
    if (jugador && jugador.foto) {
      this.storageService.deleteFile(
        this.storageService.imagesDestination,
        jugador.foto,
      );
    }
    return this.jugadorRepository.delete(id);
  }
}
