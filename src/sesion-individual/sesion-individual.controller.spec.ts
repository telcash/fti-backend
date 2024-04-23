import { Test, TestingModule } from '@nestjs/testing';
import { SesionIndividualController } from './sesion-individual.controller';
import { SesionIndividualService } from './sesion-individual.service';

describe('SesionIndividualController', () => {
  let controller: SesionIndividualController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SesionIndividualController],
      providers: [SesionIndividualService],
    }).compile();

    controller = module.get<SesionIndividualController>(SesionIndividualController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
