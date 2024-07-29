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
import { VideoJugadorService } from './video-jugador.service';
import { CreateVideoJugadorDto } from './dto/create-video-jugador.dto';
import { UpdateVideoJugadorDto } from './dto/update-video-jugador.dto';
import { AuthGuard } from 'src/users/auth.guard';

@UseGuards(AuthGuard)
@Controller('video-jugador')
export class VideoJugadorController {
  constructor(private readonly videoJugadorService: VideoJugadorService) {}

  @Post()
  async create(@Body() createVideoJugadorDto: CreateVideoJugadorDto) {
    return await this.videoJugadorService.create(createVideoJugadorDto);
  }

  @Get()
  async findAll() {
    return await this.videoJugadorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.videoJugadorService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateVideoJugadorDto: UpdateVideoJugadorDto,
  ) {
    return await this.videoJugadorService.update(+id, updateVideoJugadorDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.videoJugadorService.remove(+id);
  }
}
