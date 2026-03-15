import { Test, TestingModule } from '@nestjs/testing';
import { LijstjeService } from './lijstje.service';

describe('LijstjeService', () => {
  let service: LijstjeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LijstjeService],
    }).compile();

    service = module.get<LijstjeService>(LijstjeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
