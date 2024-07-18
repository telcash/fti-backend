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
  UseGuards,
} from '@nestjs/common';
import { EquipoService } from './equipo.service';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { StorageService } from 'src/common/services/storage.service';
import { ImageValidationPipe } from 'src/common/pipes/image-validation.pipe';
import { AuthGuard } from 'src/users/auth.guard';

@UseGuards(AuthGuard)
@Controller('equipo')
export class EquipoController {
  constructor(private readonly equipoService: EquipoService) {}

  @UseInterceptors(
    FileInterceptor('file', StorageService.saveImageOptions('equipos')),
  )
  @Post()
  async create(
    @UploadedFile(ImageValidationPipe) fileName,
    @Body() createEquipoDto: CreateEquipoDto,
  ) {
    return await this.equipoService.create(createEquipoDto, fileName);
  }

  @Get()
  async findAll() {
    return await this.equipoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.equipoService.findOne(+id);
  }

  @UseInterceptors(
    FileInterceptor('file', StorageService.saveImageOptions('equipos')),
  )
  @Patch(':id')
  async update(
    @UploadedFile(ImageValidationPipe) fileName,
    @Param('id') id: string,
    @Body() updateEquipoDto: UpdateEquipoDto,
  ) {
    return await this.equipoService.update(+id, updateEquipoDto, fileName);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.equipoService.remove(+id);
  }
}
