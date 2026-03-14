import { Test, TestingModule } from '@nestjs/testing';
import { LootjeController } from './lootje.controller';
import { LootjeService } from './lootje.service';

describe('LootjeController', () => {
  let controller: LootjeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LootjeController],
      providers: [LootjeService],
    }).compile();

    controller = module.get<LootjeController>(LootjeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
