import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { JugadorToPartidoService } from './jugador-to-partido.service';
import { CreateJugadorToPartidoDto } from './dto/create-jugador-to-partido.dto';
import { UpdateJugadorToPartidoDto } from './dto/update-jugador-to-partido.dto';

@Controller('jugador-to-partido')
export class JugadorToPartidoController {
  constructor(
    private readonly jugadorToPartidoService: JugadorToPartidoService,
  ) {}

  @Post()
  async create(@Body() createJugadorToPartidoDto: CreateJugadorToPartidoDto) {
    console.log('test');
    console.log(createJugadorToPartidoDto);
    return await this.jugadorToPartidoService.create(createJugadorToPartidoDto);
  }

  @Get()
  async findAll() {
    return await this.jugadorToPartidoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.jugadorToPartidoService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateJugadorToPartidoDto: UpdateJugadorToPartidoDto,
  ) {
    return await this.jugadorToPartidoService.update(
      +id,
      updateJugadorToPartidoDto,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.jugadorToPartidoService.remove(+id);
  }
}
