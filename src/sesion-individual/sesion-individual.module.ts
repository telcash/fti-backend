import { Module } from '@nestjs/common';
import { SesionIndividualService } from './sesion-individual.service';
import { SesionIndividualController } from './sesion-individual.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SesionIndividual } from './entities/sesion-individual.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SesionIndividual])],
  controllers: [SesionIndividualController],
  providers: [SesionIndividualService],
})
export class SesionIndividualModule {}
