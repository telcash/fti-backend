import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PosicionService } from './posicion.service';
import { CreatePosicionDto } from './dto/create-posicion.dto';
import { UpdatePosicionDto } from './dto/update-posicion.dto';

@Controller('posicion')
export class PosicionController {
  constructor(private readonly posicionService: PosicionService) {}

  @Post()
  async create(@Body() createPosicionDto: CreatePosicionDto) {
    return await this.posicionService.create(createPosicionDto);
  }

  @Get()
  async findAll() {
    return await this.posicionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.posicionService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePosicionDto: UpdatePosicionDto,
  ) {
    return await this.posicionService.update(+id, updatePosicionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.posicionService.remove(+id);
  }
}
