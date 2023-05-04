import { Test, TestingModule } from '@nestjs/testing';
import { CustoController } from './custo.controller';

describe('CustoController', () => {
  let controller: CustoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustoController],
    }).compile();

    controller = module.get<CustoController>(CustoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
