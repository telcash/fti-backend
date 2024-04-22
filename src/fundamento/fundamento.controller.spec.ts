import { Test, TestingModule } from '@nestjs/testing';
import { FundamentoController } from './fundamento.controller';
import { FundamentoService } from './fundamento.service';

describe('FundamentoController', () => {
  let controller: FundamentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FundamentoController],
      providers: [FundamentoService],
    }).compile();

    controller = module.get<FundamentoController>(FundamentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
