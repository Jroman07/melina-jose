import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LandingServicesModule } from './landing-services/landing-services.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeaderModule } from './header/header.module';

@Module({
  imports: [
    LandingServicesModule,
    HeaderModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'JosDani_1007',
      database: 'binarios',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
