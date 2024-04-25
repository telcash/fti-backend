import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JugadorToPartidoService } from './jugador-to-partido.service';
import { CreateJugadorToPartidoDto } from './dto/create-jugador-to-partido.dto';
import { UpdateJugadorToPartidoDto } from './dto/update-jugador-to-partido.dto';

@Controller('jugador-to-partido')
export class JugadorToPartidoController {
  constructor(private readonly jugadorToPartidoService: JugadorToPartidoService) {}

  @Post()
  create(@Body() createJugadorToPartidoDto: CreateJugadorToPartidoDto) {
    return this.jugadorToPartidoService.create(createJugadorToPartidoDto);
  }

  @Get()
  findAll() {
    return this.jugadorToPartidoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jugadorToPartidoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJugadorToPartidoDto: UpdateJugadorToPartidoDto) {
    return this.jugadorToPartidoService.update(+id, updateJugadorToPartidoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jugadorToPartidoService.remove(+id);
  }
}
