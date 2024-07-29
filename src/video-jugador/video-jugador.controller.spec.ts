import { Test, TestingModule } from '@nestjs/testing';
import { VideoJugadorController } from './video-jugador.controller';
import { VideoJugadorService } from './video-jugador.service';

describe('VideoJugadorController', () => {
  let controller: VideoJugadorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VideoJugadorController],
      providers: [VideoJugadorService],
    }).compile();

    controller = module.get<VideoJugadorController>(VideoJugadorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
