import { Test, TestingModule } from '@nestjs/testing';
import { EstoqueService } from './estoque.service';

describe('EstoqueService', () => {
  let provider: EstoqueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstoqueService],
    }).compile();

    provider = module.get<EstoqueService>(EstoqueService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
