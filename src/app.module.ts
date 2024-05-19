import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
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
import { Fundamento } from './fundamento/entities/fundamento.entity';
import { Posicion } from './posicion/entities/posicion.entity';
import { SesionIndividualModule } from './sesion-individual/sesion-individual.module';
import { EjercicioModule } from './ejercicio/ejercicio.module';
import { SesionIndividual } from './sesion-individual/entities/sesion-individual.entity';
import { Ejercicio } from './ejercicio/entities/ejercicio.entity';
import { JugadorToPartidoModule } from './jugador-to-partido/jugador-to-partido.module';
import { JugadorToPartido } from './jugador-to-partido/entities/jugador-to-partido.entity';
import { CommonModule } from './common/common.module';
import { NotificacionModule } from './notificacion/notificacion.module';
import { Notificacion } from './notificacion/entities/notificacion.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'img/'),
      serveRoot: '/img/',
      serveStaticOptions: {
        index: false,
      },
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      password: process.env.DB_PASSWORD,
      username: process.env.DB_USER,
      entities: [
        Jugador,
        Equipo,
        Fundamento,
        Partido,
        Posicion,
        SesionIndividual,
        Ejercicio,
        JugadorToPartido,
        Notificacion,
      ],
      database: process.env.DB_NAME,
      synchronize: true,
      logging: false,
    }),
    JugadorModule,
    EquipoModule,
    FundamentoModule,
    PartidoModule,
    PosicionModule,
    SesionIndividualModule,
    EjercicioModule,
    JugadorToPartidoModule,
    CommonModule,
    NotificacionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
