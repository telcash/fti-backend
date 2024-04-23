import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SesionIndividualService } from './sesion-individual.service';
import { CreateSesionIndividualDto } from './dto/create-sesion-individual.dto';
import { UpdateSesionIndividualDto } from './dto/update-sesion-individual.dto';

@Controller('sesion-individual')
export class SesionIndividualController {
  constructor(private readonly sesionIndividualService: SesionIndividualService) {}

  @Post()
  create(@Body() createSesionIndividualDto: CreateSesionIndividualDto) {
    return this.sesionIndividualService.create(createSesionIndividualDto);
  }

  @Get()
  findAll() {
    return this.sesionIndividualService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sesionIndividualService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSesionIndividualDto: UpdateSesionIndividualDto) {
    return this.sesionIndividualService.update(+id, updateSesionIndividualDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sesionIndividualService.remove(+id);
  }
}
