import { Injectable } from '@nestjs/common';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { Equipo } from './entities/equipo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { StorageService } from 'src/common/services/storage.service';

@Injectable()
export class EquipoService {
  constructor(
    @InjectRepository(Equipo)
    private readonly equipoRepository: Repository<Equipo>,
    private readonly storageService: StorageService,
  ) {}

  async create(
    createEquipoDto: CreateEquipoDto,
    imageName: string,
  ): Promise<Equipo> {
    const equipo: Equipo = new Equipo();
    equipo.nombre = createEquipoDto.nombre;
    equipo.foto = imageName;
    return await this.equipoRepository.save(equipo);
  }

  async findAll(): Promise<Equipo[]> {
    return await this.equipoRepository.find();
  }

  async findOne(id: number): Promise<Equipo> {
    return await this.equipoRepository.findOneBy({ id });
  }

  async findOneByName(nombre: string): Promise<Equipo> {
    return await this.equipoRepository.findOneBy({ nombre });
  }

  async update(
    id: number,
    updateEquipoDto: UpdateEquipoDto,
    fileName: string,
  ): Promise<Equipo> {
    const equipo: Equipo = new Equipo();
    const oldImage: string = (await this.equipoRepository.findOneBy({ id }))
      .foto;
    if (fileName && oldImage) {
      this.storageService.deleteFile(
        this.storageService.imagesDestination + 'equipos',
        oldImage,
      );
      equipo.foto = fileName;
    } else {
      equipo.foto = oldImage;
    }
    equipo.nombre = updateEquipoDto.nombre;
    equipo.id = id;
    return await this.equipoRepository.save(equipo);
  }

  async remove(id: number): Promise<{ affected?: number }> {
    const equipo = await this.equipoRepository.findOneBy({ id });
    if (equipo && equipo.foto) {
      this.storageService.deleteFile(
        this.storageService.imagesDestination + 'equipos/',
        equipo.foto,
      );
    }
    return await this.equipoRepository.delete(id);
  }
}
