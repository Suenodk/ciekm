import { Test, TestingModule } from '@nestjs/testing';
import { GroepService } from './groep.service';

describe('GroepService', () => {
  let service: GroepService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroepService],
    }).compile();

    service = module.get<GroepService>(GroepService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
