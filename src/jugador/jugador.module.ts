import { Module } from '@nestjs/common';
import { JugadorService } from './jugador.service';
import { JugadorController } from './jugador.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Jugador } from './entities/jugador.entity';
import { PosicionModule } from 'src/posicion/posicion.module';
import { EquipoModule } from 'src/equipo/equipo.module';

@Module({
  imports: [TypeOrmModule.forFeature([Jugador]), PosicionModule, EquipoModule],
  controllers: [JugadorController],
  providers: [JugadorService],
})
export class JugadorModule {}
