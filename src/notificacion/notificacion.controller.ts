import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Sse,
  MessageEvent,
} from '@nestjs/common';
import { NotificacionService } from './notificacion.service';
import { CreateNotificacionDto } from './dto/create-notificacion.dto';
import { UpdateNotificacionDto } from './dto/update-notificacion.dto';
import { from, interval, map, Observable, switchMap } from 'rxjs';

@Controller('notificacion')
export class NotificacionController {
  constructor(private readonly notificacionService: NotificacionService) {}

  @Post()
  create(@Body() createNotificationDto: CreateNotificacionDto) {
    return this.notificacionService.create(createNotificationDto);
  }

  @Get()
  findAll() {
    return this.notificacionService.findAll();
  }

  @Sse('sse')
  getNotifications(): Observable<MessageEvent> {
    return interval(24 * 3600 * 1000).pipe(
      map(async (_) => {
        const notificaciones =
          await this.notificacionService.getNotificacions();
        return {
          data: {
            notificaciones: notificaciones,
          },
        };
      }),
      switchMap((data) => from(data)),
    );
  }

  @Get('all')
  async getAllNotifications() {
    const res = await this.notificacionService.getNotificacions();
    return res.data.notificaciones;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notificacionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNotificationDto: UpdateNotificacionDto,
  ) {
    return this.notificacionService.update(+id, updateNotificationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notificacionService.remove(+id);
  }
}
