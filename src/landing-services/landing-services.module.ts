import { Module } from '@nestjs/common';
import { LandingServicesService } from './landing-services.service';
import { LandingServicesController } from './landing-services.controller';

@Module({
  controllers: [LandingServicesController],
  providers: [LandingServicesService],
})
export class LandingServicesModule {}
