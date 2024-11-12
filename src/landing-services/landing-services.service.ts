import { Injectable } from '@nestjs/common';
import { LandingServiceDto } from './dto/Landing-serviceDto';

@Injectable()
export class LandingServicesService {
  create(createLandingServiceDto: LandingServiceDto) {
    return 'This action adds a new landingService';
  }

  findAll() {
    return `This action returns all landingServices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} landingService`;
  }

  update(id: number, updateLandingServiceDto: LandingServiceDto) {
    return `This action updates a #${id} landingService`;
  }

  remove(id: number) {
    return `This action removes a #${id} landingService`;
  }
}
