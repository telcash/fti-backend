import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PartidoService } from './partido.service';
import { CreatePartidoDto } from './dto/create-partido.dto';
import { UpdatePartidoDto } from './dto/update-partido.dto';

@Controller('partido')
export class PartidoController {
  constructor(private readonly partidoService: PartidoService) {}

  @Post()
  async create(@Body() createPartidoDto: CreatePartidoDto) {
    return await this.partidoService.create(createPartidoDto);
  }

  @Get()
  async findAll() {
    return await this.partidoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.partidoService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePartidoDto: UpdatePartidoDto,
  ) {
    return await this.partidoService.update(+id, updatePartidoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.partidoService.remove(+id);
  }
}
