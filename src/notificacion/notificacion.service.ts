import { Injectable } from '@nestjs/common';
import { CreateNotificacionDto } from './dto/create-notificacion.dto';
import { UpdateNotificacionDto } from './dto/update-notificacion.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { JugadorService } from 'src/jugador/jugador.service';
import { Notificacion } from './entities/notificacion.entity';

@Injectable()
export class NotificacionService {
  constructor(
    @InjectRepository(Notificacion)
    private readonly notificacionRepository: Repository<Notificacion>,
    private readonly jugadorService: JugadorService,
  ) {}

  async create(
    createNotificacionDto: CreateNotificacionDto,
  ): Promise<Notificacion> {
    return await this.notificacionRepository.save(createNotificacionDto);
  }

  async findAll(): Promise<Notificacion[]> {
    return await this.notificacionRepository.find();
  }

  async findOne(id: number): Promise<Notificacion> {
    return await this.notificacionRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateNotificacionDto: UpdateNotificacionDto,
  ): Promise<Notificacion> {
    const notificacion = await this.notificacionRepository.findOneBy({ id });
    if (!notificacion) {
      return await this.notificacionRepository.save(updateNotificacionDto);
    } else {
      return await this.notificacionRepository.save({
        id,
        ...updateNotificacionDto,
      });
    }
  }

  async remove(id: number): Promise<{ affected?: number }> {
    return await this.notificacionRepository.delete(id);
  }

  async getNotificacions() {
    const jugadores = await this.jugadorService.findAllWithRelations();
    const fundamentosEvaluados = [];
    jugadores.forEach((jugador) => {
      const fundamentosEvaluadosJugador = [];
      jugador.sesionesIndividuales.forEach((sesion) => {
        sesion.ejercicios.forEach((ejercicio) => {
          const index = fundamentosEvaluadosJugador.findIndex(
            (f) => f.nombre === ejercicio.fundamento.nombre,
          );
          if (index === -1) {
            fundamentosEvaluadosJugador.push({
              nombre: ejercicio.fundamento.nombre,
              valoracion: ejercicio.valoracion,
              valoracionMaxima: ejercicio.valoracionMaxima,
            });
          } else {
            fundamentosEvaluadosJugador[index].valoracion +=
              ejercicio.valoracion;
            fundamentosEvaluadosJugador[index].valoracionMaxima +=
              ejercicio.valoracionMaxima;
          }
        });
      });
      if (fundamentosEvaluadosJugador.length > 0) {
        fundamentosEvaluados.push({
          jugador: {
            id: jugador.id,
            nombre: jugador.nombre,
            apellido: jugador.apellido,
          },
          fundamentos: fundamentosEvaluadosJugador,
        });
      }
    });

    const notificaciones = [];

    fundamentosEvaluados.forEach((f) => {
      f.fundamentos.forEach((fundamento) => {
        const porcentajeMinimo = 60;
        const porcentaje =
          (fundamento.valoracion / fundamento.valoracionMaxima) * 100;
        if (porcentaje < porcentajeMinimo) {
          notificaciones.push(
            `El jugador ${f.jugador.nombre} ${f.jugador.apellido} tiene un porcentaje de acierto de un ${porcentajeMinimo}% o menos en el fundamento ${fundamento.nombre}`,
          );
        }
      });
    });

    return { data: { notificaciones: notificaciones } };
  }
}
