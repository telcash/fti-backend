import { Injectable } from '@nestjs/common';
import { CreatePartidoDto } from './dto/create-partido.dto';
import { UpdatePartidoDto } from './dto/update-partido.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Partido } from './entities/partido.entity';
import { Repository } from 'typeorm';
import { EquipoService } from 'src/equipo/equipo.service';

@Injectable()
export class PartidoService {
  constructor(
    @InjectRepository(Partido)
    private readonly partidoRepository: Repository<Partido>,
    private readonly equipoService: EquipoService,
  ) {}

  async create(createPartidoDto: CreatePartidoDto): Promise<Partido> {
    const partido: Partido = new Partido();
    partido.fecha = createPartidoDto.fecha;
    partido.resultado = createPartidoDto.resultado;
    partido.equipoLocal = await this.equipoService.findOne(
      createPartidoDto.equipoLocalId,
    );
    partido.equipoVisitante = await this.equipoService.findOne(
      createPartidoDto.equipoVisitanteId,
    );
    return this.partidoRepository.save(partido);
  }

  findAll(): Promise<Partido[]> {
    return this.partidoRepository.find();
  }

  findOne(id: number): Promise<Partido> {
    return this.partidoRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updatePartidoDto: UpdatePartidoDto,
  ): Promise<Partido> {
    const partido: Partido = new Partido();
    partido.fecha = updatePartidoDto.fecha;
    partido.resultado = updatePartidoDto.resultado;
    partido.equipoLocal = await this.equipoService.findOne(
      updatePartidoDto.equipoLocalId,
    );
    partido.equipoVisitante = await this.equipoService.findOne(
      updatePartidoDto.equipoVisitanteId,
    );
    partido.id = id;
    return this.partidoRepository.save(partido);
  }

  remove(id: number): Promise<{ affected?: number }> {
    return this.partidoRepository.delete(id);
  }
}
