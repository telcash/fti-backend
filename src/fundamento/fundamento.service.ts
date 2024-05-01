import { Injectable } from '@nestjs/common';
import { CreateFundamentoDto } from './dto/create-fundamento.dto';
import { UpdateFundamentoDto } from './dto/update-fundamento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Fundamento } from './entities/fundamento.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FundamentoService {
  constructor(
    @InjectRepository(Fundamento)
    private readonly fundamentoRepository: Repository<Fundamento>,
  ) {}

  async create(createFundamentoDto: CreateFundamentoDto): Promise<Fundamento> {
    const fundamento: Fundamento = new Fundamento();
    fundamento.nombre = createFundamentoDto.nombre;
    fundamento.tipo = createFundamentoDto.tipo;
    return await this.fundamentoRepository.save(fundamento);
  }

  async findAll(): Promise<Fundamento[]> {
    return await this.fundamentoRepository.find();
  }

  async findOne(id: number): Promise<Fundamento> {
    return await this.fundamentoRepository.findOneBy({ id });
  }

  async findOneByName(nombre: string): Promise<Fundamento> {
    return await this.fundamentoRepository.findOneBy({ nombre });
  }

  async update(
    id: number,
    updateFundamentoDto: UpdateFundamentoDto,
  ): Promise<Fundamento> {
    const fundamento: Fundamento = new Fundamento();
    fundamento.nombre = updateFundamentoDto.nombre;
    fundamento.tipo = updateFundamentoDto.tipo;
    fundamento.id = id;
    return await this.fundamentoRepository.save(fundamento);
  }

  async remove(id: number): Promise<{ affected?: number }> {
    return await this.fundamentoRepository.delete(id);
  }
}
