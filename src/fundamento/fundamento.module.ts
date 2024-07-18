import { Module } from '@nestjs/common';
import { FundamentoService } from './fundamento.service';
import { FundamentoController } from './fundamento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fundamento } from './entities/fundamento.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Fundamento]), UsersModule],
  controllers: [FundamentoController],
  providers: [FundamentoService],
  exports: [FundamentoService],
})
export class FundamentoModule {}
