import { Test, TestingModule } from '@nestjs/testing';
import { GroepController } from './groep.controller';
import { GroepService } from './groep.service';

describe('GroepController', () => {
  let controller: GroepController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroepController],
      providers: [GroepService],
    }).compile();

    controller = module.get<GroepController>(GroepController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
