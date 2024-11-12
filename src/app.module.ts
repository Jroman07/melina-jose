import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LandingServicesModule } from './landing-services/landing-services.module';

@Module({
  imports: [LandingServicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
