import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FundamentoService } from './fundamento.service';
import { CreateFundamentoDto } from './dto/create-fundamento.dto';
import { UpdateFundamentoDto } from './dto/update-fundamento.dto';

@Controller('fundamento')
export class FundamentoController {
  constructor(private readonly fundamentoService: FundamentoService) {}

  @Post()
  create(@Body() createFundamentoDto: CreateFundamentoDto) {
    return this.fundamentoService.create(createFundamentoDto);
  }

  @Get()
  findAll() {
    return this.fundamentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fundamentoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFundamentoDto: UpdateFundamentoDto) {
    return this.fundamentoService.update(+id, updateFundamentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fundamentoService.remove(+id);
  }
}
