import { Module } from '@nestjs/common';
import { LandingServicesService } from './landing-services.service';
import { LandingServicesController } from './landing-services.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LandingService } from './entities/landing-service.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LandingService])],
  controllers: [LandingServicesController],
  providers: [LandingServicesService],
})
export class LandingServicesModule {}
