import { Test, TestingModule } from '@nestjs/testing';
import { LijstjeController } from './lijstje.controller';
import { LijstjeService } from './lijstje.service';

describe('LijstjeController', () => {
  let controller: LijstjeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LijstjeController],
      providers: [LijstjeService],
    }).compile();

    controller = module.get<LijstjeController>(LijstjeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
