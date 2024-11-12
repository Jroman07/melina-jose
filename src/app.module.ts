import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LandingServicesModule } from './landing-services/landing-services.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    LandingServicesModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'JosDani_1007',
      database: 'binarios',
      autoLoadEntities: true,
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
