import { Test, TestingModule } from '@nestjs/testing';
import { JugadorToPartidoService } from './jugador-to-partido.service';

describe('JugadorToPartidoService', () => {
  let service: JugadorToPartidoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JugadorToPartidoService],
    }).compile();

    service = module.get<JugadorToPartidoService>(JugadorToPartidoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
