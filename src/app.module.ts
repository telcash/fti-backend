import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JugadorModule } from './jugador/jugador.module';
import { EquipoModule } from './equipo/equipo.module';
import { FundamentoModule } from './fundamento/fundamento.module';
import { PartidoModule } from './partido/partido.module';
import { PosicionModule } from './posicion/posicion.module';
import { Jugador } from './jugador/entities/jugador.entity';
import { Equipo } from './equipo/entities/equipo.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'ftidb7788',
      username: 'postgres',
      entities: [Jugador, Equipo],
      database: 'pgFti',
      synchronize: true,
      logging: true,
    }),
    JugadorModule,
    EquipoModule,
    FundamentoModule,
    PartidoModule,
    PosicionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
