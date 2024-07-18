import { Module } from '@nestjs/common';
import { PosicionService } from './posicion.service';
import { PosicionController } from './posicion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posicion } from './entities/posicion.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Posicion]), UsersModule],
  controllers: [PosicionController],
  providers: [PosicionService],
  exports: [PosicionService],
})
export class PosicionModule {}
