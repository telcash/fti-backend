import { Module } from '@nestjs/common';
import { PosicionService } from './posicion.service';
import { PosicionController } from './posicion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posicion } from './entities/posicion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Posicion])],
  controllers: [PosicionController],
  providers: [PosicionService],
})
export class PosicionModule {}
