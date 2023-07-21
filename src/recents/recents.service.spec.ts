import { Test, TestingModule } from '@nestjs/testing';
import { RecentsService } from './recents.service';

describe('RecentsService', () => {
  let service: RecentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecentsService],
    }).compile();

    service = module.get<RecentsService>(RecentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
