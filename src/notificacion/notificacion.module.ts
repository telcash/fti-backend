import { Module } from '@nestjs/common';
import { NotificacionService } from './notificacion.service';
import { NotificacionController } from './notificacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JugadorModule } from 'src/jugador/jugador.module';
import { Notificacion } from './entities/notificacion.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Notificacion]),
    JugadorModule,
    UsersModule,
  ],
  controllers: [NotificacionController],
  providers: [NotificacionService],
  exports: [NotificacionService],
})
export class NotificacionModule {}
