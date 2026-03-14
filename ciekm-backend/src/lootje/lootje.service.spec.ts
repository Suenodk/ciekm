import { Test, TestingModule } from '@nestjs/testing';
import { LootjeService } from './lootje.service';

describe('LootjeService', () => {
  let service: LootjeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LootjeService],
    }).compile();

    service = module.get<LootjeService>(LootjeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
