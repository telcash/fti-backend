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
import { Partido } from './partido/entities/partido.entity';
import { JugadorToPartido } from './jugador/entities/jugadorToPartido';
import { Fundamento } from './fundamento/entities/fundamento.entity';
import { Posicion } from './posicion/entities/posicion.entity';
import { SesionIndividualModule } from './sesion-individual/sesion-individual.module';
import { EjercicioModule } from './ejercicio/ejercicio.module';
import { SesionIndividual } from './sesion-individual/entities/sesion-individual.entity';
import { Ejercicio } from './ejercicio/entities/ejercicio.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'ftidb7788',
      username: 'postgres',
      entities: [
        Jugador,
        Equipo,
        Fundamento,
        Partido,
        Posicion,
        SesionIndividual,
        Ejercicio,
        JugadorToPartido,
      ],
      database: 'pgFti',
      synchronize: true,
      logging: true,
    }),
    JugadorModule,
    EquipoModule,
    FundamentoModule,
    PartidoModule,
    PosicionModule,
    SesionIndividualModule,
    EjercicioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
