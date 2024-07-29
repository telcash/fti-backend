import { Module } from '@nestjs/common';
import { VideoJugadorService } from './video-jugador.service';
import { VideoJugadorController } from './video-jugador.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoJugador } from './entities/video-jugador.entity';
import { JugadorModule } from 'src/jugador/jugador.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([VideoJugador]),
    JugadorModule,
    UsersModule,
  ],
  controllers: [VideoJugadorController],
  providers: [VideoJugadorService],
  exports: [VideoJugadorService],
})
export class VideoJugadorModule {}
