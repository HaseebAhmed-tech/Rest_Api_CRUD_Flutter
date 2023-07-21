import { Test, TestingModule } from '@nestjs/testing';
import { RecentsController } from './recents.controller';
import { RecentsService } from './recents.service';

describe('RecentsController', () => {
  let controller: RecentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecentsController],
      providers: [RecentsService],
    }).compile();

    controller = module.get<RecentsController>(RecentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
