import { Test, TestingModule } from '@nestjs/testing';
import { DespesaService } from './despesa.service';

describe('DespesaService', () => {
  let provider: DespesaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DespesaService],
    }).compile();

    provider = module.get<DespesaService>(DespesaService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
