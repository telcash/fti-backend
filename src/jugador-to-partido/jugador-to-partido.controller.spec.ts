import { Test, TestingModule } from '@nestjs/testing';
import { JugadorToPartidoController } from './jugador-to-partido.controller';
import { JugadorToPartidoService } from './jugador-to-partido.service';

describe('JugadorToPartidoController', () => {
  let controller: JugadorToPartidoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JugadorToPartidoController],
      providers: [JugadorToPartidoService],
    }).compile();

    controller = module.get<JugadorToPartidoController>(JugadorToPartidoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
