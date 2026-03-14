import { Test, TestingModule } from '@nestjs/testing';
import { GebruikerService } from './gebruiker.service';

describe('GebruikerService', () => {
  let service: GebruikerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GebruikerService],
    }).compile();

    service = module.get<GebruikerService>(GebruikerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
