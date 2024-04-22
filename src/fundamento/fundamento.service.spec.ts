import { Test, TestingModule } from '@nestjs/testing';
import { FundamentoService } from './fundamento.service';

describe('FundamentoService', () => {
  let service: FundamentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FundamentoService],
    }).compile();

    service = module.get<FundamentoService>(FundamentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
