import { Test, TestingModule } from '@nestjs/testing';
import { SesionIndividualService } from './sesion-individual.service';

describe('SesionIndividualService', () => {
  let service: SesionIndividualService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SesionIndividualService],
    }).compile();

    service = module.get<SesionIndividualService>(SesionIndividualService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
