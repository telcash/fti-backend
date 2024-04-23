import { Module } from '@nestjs/common';
import { PartidoService } from './partido.service';
import { PartidoController } from './partido.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Partido } from './entities/partido.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Partido])],
  controllers: [PartidoController],
  providers: [PartidoService],
})
export class PartidoModule {}
