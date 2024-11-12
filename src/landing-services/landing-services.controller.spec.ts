import { Test, TestingModule } from '@nestjs/testing';
import { LandingServicesController } from './landing-services.controller';
import { LandingServicesService } from './landing-services.service';

describe('LandingServicesController', () => {
  let controller: LandingServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LandingServicesController],
      providers: [LandingServicesService],
    }).compile();

    controller = module.get<LandingServicesController>(LandingServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
