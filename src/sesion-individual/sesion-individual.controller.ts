import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SesionIndividualService } from './sesion-individual.service';
import { CreateSesionIndividualDto } from './dto/create-sesion-individual.dto';
import { UpdateSesionIndividualDto } from './dto/update-sesion-individual.dto';

@Controller('sesion-individual')
export class SesionIndividualController {
  constructor(
    private readonly sesionIndividualService: SesionIndividualService,
  ) {}

  @Post()
  async create(@Body() createSesionIndividualDto: CreateSesionIndividualDto) {
    return await this.sesionIndividualService.create(createSesionIndividualDto);
  }

  @Get()
  async findAll() {
    return await this.sesionIndividualService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.sesionIndividualService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSesionIndividualDto: UpdateSesionIndividualDto,
  ) {
    return await this.sesionIndividualService.update(
      +id,
      updateSesionIndividualDto,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.sesionIndividualService.remove(+id);
  }
}
