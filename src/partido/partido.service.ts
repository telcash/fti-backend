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
    return await this.partidoRepository.save(partido);
  }

  async findAll(): Promise<Partido[]> {
    return await this.partidoRepository.find({
      relations: ['equipoLocal', 'equipoVisitante'],
    });
  }

  async findOne(id: number): Promise<Partido> {
    return await this.partidoRepository.findOneBy({ id });
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
    return await this.partidoRepository.save(partido);
  }

  async remove(id: number): Promise<{ affected?: number }> {
    return await this.partidoRepository.delete(id);
  }
}
