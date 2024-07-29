import { Test, TestingModule } from '@nestjs/testing';
import { VideoJugadorService } from './video-jugador.service';

describe('VideoJugadorService', () => {
  let service: VideoJugadorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VideoJugadorService],
    }).compile();

    service = module.get<VideoJugadorService>(VideoJugadorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
