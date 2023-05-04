import { Test, TestingModule } from '@nestjs/testing';
import { CustoService } from './custo.service';

describe('CustoService', () => {
  let provider: CustoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustoService],
    }).compile();

    provider = module.get<CustoService>(CustoService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
