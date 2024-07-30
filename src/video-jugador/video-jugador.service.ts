import { Injectable } from '@nestjs/common';
import { CreateVideoJugadorDto } from './dto/create-video-jugador.dto';
import { UpdateVideoJugadorDto } from './dto/update-video-jugador.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { VideoJugador } from './entities/video-jugador.entity';
import { Repository } from 'typeorm';
import { JugadorService } from 'src/jugador/jugador.service';

@Injectable()
export class VideoJugadorService {
  constructor(
    @InjectRepository(VideoJugador)
    private readonly videoJugadorRepository: Repository<VideoJugador>,
    private readonly jugadorService: JugadorService,
  ) {}

  async create(
    createVideoJugadorDto: CreateVideoJugadorDto,
  ): Promise<VideoJugador> {
    const videoJugador: VideoJugador = new VideoJugador();
    videoJugador.nombre = createVideoJugadorDto.nombre;
    videoJugador.url = createVideoJugadorDto.url;
    videoJugador.jugador = await this.jugadorService.findOne(
      createVideoJugadorDto.jugadorId,
    );
    return await this.videoJugadorRepository.save(videoJugador);
  }

  async findAll(): Promise<VideoJugador[]> {
    return await this.videoJugadorRepository.find({
      relations: ['jugador'],
    });
  }

  async findOne(id: number): Promise<VideoJugador> {
    return await this.videoJugadorRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateVideoJugadorDto: UpdateVideoJugadorDto,
  ): Promise<VideoJugador> {
    const videoJugador: VideoJugador = new VideoJugador();
    videoJugador.nombre = updateVideoJugadorDto.nombre;
    videoJugador.url = updateVideoJugadorDto.url;
    videoJugador.jugador = await this.jugadorService.findOne(
      updateVideoJugadorDto.jugadorId,
    );
    videoJugador.id = id;
    return await this.videoJugadorRepository.save(videoJugador);
  }

  async remove(id: number): Promise<{ affected?: number }> {
    return await this.videoJugadorRepository.delete(id);
  }
}
