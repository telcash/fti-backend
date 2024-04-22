import { Module } from '@nestjs/common';
import { FundamentoService } from './fundamento.service';
import { FundamentoController } from './fundamento.controller';

@Module({
  controllers: [FundamentoController],
  providers: [FundamentoService]
})
export class FundamentoModule {}
