import { Test, TestingModule } from '@nestjs/testing';
import { ServiceService } from './service.service';

describe('ServiceService', () => {
  let provider: ServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceService],
    }).compile();

    provider = module.get<ServiceService>(ServiceService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
