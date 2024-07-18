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
import { EjercicioService } from './ejercicio.service';
import { CreateEjercicioDto } from './dto/create-ejercicio.dto';
import { UpdateEjercicioDto } from './dto/update-ejercicio.dto';
import { AuthGuard } from 'src/users/auth.guard';

@UseGuards(AuthGuard)
@Controller('ejercicio')
export class EjercicioController {
  constructor(private readonly ejercicioService: EjercicioService) {}

  @Post()
  async create(@Body() createEjercicioDto: CreateEjercicioDto) {
    return await this.ejercicioService.create(createEjercicioDto);
  }

  @Get()
  async findAll() {
    return await this.ejercicioService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.ejercicioService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEjercicioDto: UpdateEjercicioDto,
  ) {
    return await this.ejercicioService.update(+id, updateEjercicioDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.ejercicioService.remove(+id);
  }
}
