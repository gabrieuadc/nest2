import { Test, TestingModule } from '@nestjs/testing';
import { EmpregadoService } from './empregado.service';

describe('EmpregadoService', () => {
  let provider: EmpregadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmpregadoService],
    }).compile();

    provider = module.get<EmpregadoService>(EmpregadoService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
