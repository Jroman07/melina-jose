import { Test, TestingModule } from '@nestjs/testing';
import { LandingServicesService } from './landing-services.service';

describe('LandingServicesService', () => {
  let service: LandingServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LandingServicesService],
    }).compile();

    service = module.get<LandingServicesService>(LandingServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
