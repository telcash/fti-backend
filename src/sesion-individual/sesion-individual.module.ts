import { Module } from '@nestjs/common';
import { SesionIndividualService } from './sesion-individual.service';
import { SesionIndividualController } from './sesion-individual.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SesionIndividual } from './entities/sesion-individual.entity';
import { JugadorModule } from 'src/jugador/jugador.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([SesionIndividual]),
    JugadorModule,
    UsersModule,
  ],
  controllers: [SesionIndividualController],
  providers: [SesionIndividualService],
  exports: [SesionIndividualService],
})
export class SesionIndividualModule {}
