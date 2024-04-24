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

  create(createFundamentoDto: CreateFundamentoDto): Promise<Fundamento> {
    const fundamento: Fundamento = new Fundamento();
    fundamento.nombre = createFundamentoDto.nombre;
    fundamento.tipo = createFundamentoDto.tipo;
    return this.fundamentoRepository.save(fundamento);
  }

  findAll(): Promise<Fundamento[]> {
    return this.fundamentoRepository.find();
  }

  findOne(id: number): Promise<Fundamento> {
    return this.fundamentoRepository.findOneBy({ id });
  }

  update(
    id: number,
    updateFundamentoDto: UpdateFundamentoDto,
  ): Promise<Fundamento> {
    const fundamento: Fundamento = new Fundamento();
    fundamento.nombre = updateFundamentoDto.nombre;
    fundamento.tipo = updateFundamentoDto.tipo;
    fundamento.id = id;
    return this.fundamentoRepository.save(fundamento);
  }

  remove(id: number): Promise<{ affected?: number }> {
    return this.fundamentoRepository.delete(id);
  }
}
