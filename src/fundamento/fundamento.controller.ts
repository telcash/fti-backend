import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { FundamentoService } from './fundamento.service';
import { CreateFundamentoDto } from './dto/create-fundamento.dto';
import { UpdateFundamentoDto } from './dto/update-fundamento.dto';
import { AuthGuard } from 'src/users/auth.guard';

@UseGuards(AuthGuard)
@Controller('fundamento')
export class FundamentoController {
  constructor(private readonly fundamentoService: FundamentoService) {}

  @Post()
  async create(@Body() createFundamentoDto: CreateFundamentoDto) {
    return await this.fundamentoService.create(createFundamentoDto);
  }

  @Get()
  async findAll() {
    return await this.fundamentoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.fundamentoService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateFundamentoDto: UpdateFundamentoDto,
  ) {
    return await this.fundamentoService.update(+id, updateFundamentoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.fundamentoService.remove(+id);
  }
}
