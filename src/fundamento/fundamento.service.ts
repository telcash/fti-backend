import { Injectable } from '@nestjs/common';
import { CreateFundamentoDto } from './dto/create-fundamento.dto';
import { UpdateFundamentoDto } from './dto/update-fundamento.dto';

@Injectable()
export class FundamentoService {
  create(createFundamentoDto: CreateFundamentoDto) {
    return 'This action adds a new fundamento';
  }

  findAll() {
    return `This action returns all fundamento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fundamento`;
  }

  update(id: number, updateFundamentoDto: UpdateFundamentoDto) {
    return `This action updates a #${id} fundamento`;
  }

  remove(id: number) {
    return `This action removes a #${id} fundamento`;
  }
}
