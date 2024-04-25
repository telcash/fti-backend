import { Module } from '@nestjs/common';
import { EjercicioService } from './ejercicio.service';
import { EjercicioController } from './ejercicio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ejercicio } from './entities/ejercicio.entity';
import { FundamentoModule } from 'src/fundamento/fundamento.module';
import { SesionIndividualModule } from 'src/sesion-individual/sesion-individual.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Ejercicio]),
    FundamentoModule,
    SesionIndividualModule,
  ],
  controllers: [EjercicioController],
  providers: [EjercicioService],
})
export class EjercicioModule {}
