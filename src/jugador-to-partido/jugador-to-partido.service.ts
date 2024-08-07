import { Injectable } from '@nestjs/common';
import { CreateJugadorToPartidoDto } from './dto/create-jugador-to-partido.dto';
import { UpdateJugadorToPartidoDto } from './dto/update-jugador-to-partido.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { JugadorToPartido } from './entities/jugador-to-partido.entity';
import { Repository } from 'typeorm';
import { JugadorService } from 'src/jugador/jugador.service';
import { PartidoService } from 'src/partido/partido.service';

@Injectable()
export class JugadorToPartidoService {
  constructor(
    @InjectRepository(JugadorToPartido)
    private readonly jugadorToPartidoRepository: Repository<JugadorToPartido>,
    private readonly jugadorService: JugadorService,
    private readonly partidoService: PartidoService,
  ) {}
  async create(
    createJugadorToPartidoDto: CreateJugadorToPartidoDto,
  ): Promise<JugadorToPartido> {
    const jugadorToPartido: JugadorToPartido = new JugadorToPartido();
    jugadorToPartido.convocado = createJugadorToPartidoDto.convocado;
    jugadorToPartido.lesionado = createJugadorToPartidoDto.lesionado;
    jugadorToPartido.minJugados = createJugadorToPartidoDto.minJugados;
    jugadorToPartido.titular = createJugadorToPartidoDto.titular;
    jugadorToPartido.goles = createJugadorToPartidoDto.goles;
    jugadorToPartido.asistencias = createJugadorToPartidoDto.asistencias;
    jugadorToPartido.tarjetasAmarillas =
      createJugadorToPartidoDto.tarjetasAmarillas;
    jugadorToPartido.tarjetasRojas = createJugadorToPartidoDto.tarjetasRojas;
    jugadorToPartido.valoracion = createJugadorToPartidoDto.valoracion;
    jugadorToPartido.jugador = await this.jugadorService.findOne(
      createJugadorToPartidoDto.jugadorId,
    );
    jugadorToPartido.partido = await this.partidoService.findOne(
      createJugadorToPartidoDto.partidoId,
    );
    return await this.jugadorToPartidoRepository.save(jugadorToPartido);
  }

  async findAll(): Promise<JugadorToPartido[]> {
    return await this.jugadorToPartidoRepository.find({
      relations: ['jugador', 'partido'],
    });
  }

  async findOne(id: number): Promise<JugadorToPartido> {
    return await this.jugadorToPartidoRepository.findOneBy({
      jugadorToPartidoId: id,
    });
  }

  async update(
    id: number,
    updateJugadorToPartidoDto: UpdateJugadorToPartidoDto,
  ): Promise<JugadorToPartido> {
    const jugadorToPartido: JugadorToPartido = new JugadorToPartido();
    jugadorToPartido.convocado = updateJugadorToPartidoDto.convocado;
    jugadorToPartido.lesionado = updateJugadorToPartidoDto.lesionado;
    jugadorToPartido.minJugados = updateJugadorToPartidoDto.minJugados;
    jugadorToPartido.titular = updateJugadorToPartidoDto.titular;
    jugadorToPartido.goles = updateJugadorToPartidoDto.goles;
    jugadorToPartido.asistencias = updateJugadorToPartidoDto.asistencias;
    jugadorToPartido.tarjetasAmarillas =
      updateJugadorToPartidoDto.tarjetasAmarillas;
    jugadorToPartido.tarjetasRojas = updateJugadorToPartidoDto.tarjetasRojas;
    jugadorToPartido.valoracion = updateJugadorToPartidoDto.valoracion;
/*     jugadorToPartido.jugador = await this.jugadorService.findOne(
      updateJugadorToPartidoDto.jugadorId,
    );
    jugadorToPartido.partido = await this.partidoService.findOne(
      updateJugadorToPartidoDto.partidoId,
    ); */
    jugadorToPartido.jugadorToPartidoId = id;
    return await this.jugadorToPartidoRepository.save(jugadorToPartido);
  }

  async remove(id: number): Promise<{ affected?: number }> {
    return await this.jugadorToPartidoRepository.delete(id);
  }
}
