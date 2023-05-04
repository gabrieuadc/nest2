import { Test, TestingModule } from '@nestjs/testing';
import { EmpregadoController } from './empregado.controller';

describe('EmpregadoController', () => {
  let controller: EmpregadoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmpregadoController],
    }).compile();

    controller = module.get<EmpregadoController>(EmpregadoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
