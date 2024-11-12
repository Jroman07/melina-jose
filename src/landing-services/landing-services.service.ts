import { Injectable } from '@nestjs/common';
import { LandingServiceDto } from './dto/Landing-serviceDto';
import { InjectRepository } from '@nestjs/typeorm';
import { LandingService } from './entities/landing-service.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LandingServicesService {
  constructor(
    @InjectRepository(LandingService)
    private landingServiceRepository: Repository<LandingService>,
  ){}
  create(landingServiceDto: LandingServiceDto) {
    const newLandingService = this.landingServiceRepository.create(landingServiceDto);
    this.landingServiceRepository.save(newLandingService);
    return newLandingService;
  }

  findAll() {
    return this.landingServiceRepository.find();
  }

  findOne(id: number) {
    return this.landingServiceRepository.findOneBy({id});
  }

  update(id: number, landingServiceDto: LandingServiceDto) {
    this.landingServiceRepository.update(id, landingServiceDto);
  }

  remove(id: number) {
    return this.landingServiceRepository.delete(id);
  }
}
