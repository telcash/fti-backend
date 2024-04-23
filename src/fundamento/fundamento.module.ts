import { Module } from '@nestjs/common';
import { FundamentoService } from './fundamento.service';
import { FundamentoController } from './fundamento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fundamento } from './entities/fundamento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fundamento])],
  controllers: [FundamentoController],
  providers: [FundamentoService],
})
export class FundamentoModule {}
