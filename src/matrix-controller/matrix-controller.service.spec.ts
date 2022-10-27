import { Test, TestingModule } from '@nestjs/testing';
import { MatrixControllerService } from './matrix-controller.service';

describe('MatrixControllerService', () => {
  let service: MatrixControllerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MatrixControllerService],
    }).compile();

    service = module.get<MatrixControllerService>(MatrixControllerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
