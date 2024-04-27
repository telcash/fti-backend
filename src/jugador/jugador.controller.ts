import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { JugadorService } from './jugador.service';
import { CreateJugadorDto } from './dto/create-jugador.dto';
import { UpdateJugadorDto } from './dto/update-jugador.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { StorageService } from 'src/common/services/storage.service';
import { ImageValidationPipe } from 'src/common/pipes/image-validation.pipe';

@Controller('jugador')
export class JugadorController {
  constructor(private readonly jugadorService: JugadorService) {}

  @UseInterceptors(FileInterceptor('file', StorageService.saveImageOptions))
  @Post()
  create(
    @UploadedFile(ImageValidationPipe) fileName,
    @Body() createJugadorDto: CreateJugadorDto,
  ) {
    console.log(createJugadorDto.posicion);
    return this.jugadorService.create(createJugadorDto, fileName);
  }

  @Get()
  async findAll() {
    console.log(await this.jugadorService.findAll());
    return this.jugadorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.jugadorService.findOne(+id);
  }

  @UseInterceptors(FileInterceptor('file', StorageService.saveImageOptions))
  @Patch(':id')
  update(
    @Param('id') id: string,
    @UploadedFile(ImageValidationPipe) fileName,
    @Body() updateJugadorDto: UpdateJugadorDto,
  ) {
    return this.jugadorService.update(+id, updateJugadorDto, fileName);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jugadorService.remove(+id);
  }
}
