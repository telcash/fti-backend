import { Module } from '@nestjs/common';
import { JugadorToPartidoService } from './jugador-to-partido.service';
import { JugadorToPartidoController } from './jugador-to-partido.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JugadorToPartido } from './entities/jugador-to-partido.entity';
import { PartidoModule } from 'src/partido/partido.module';
import { JugadorModule } from 'src/jugador/jugador.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([JugadorToPartido]),
    PartidoModule,
    JugadorModule,
    UsersModule,
  ],
  controllers: [JugadorToPartidoController],
  providers: [JugadorToPartidoService],
})
export class JugadorToPartidoModule {}
