import { Module } from '@nestjs/common';
import { PartidoService } from './partido.service';
import { PartidoController } from './partido.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Partido } from './entities/partido.entity';
import { EquipoModule } from 'src/equipo/equipo.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Partido]), EquipoModule, UsersModule],
  controllers: [PartidoController],
  providers: [PartidoService],
  exports: [PartidoService],
})
export class PartidoModule {}
