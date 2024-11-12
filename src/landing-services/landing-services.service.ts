import { Injectable } from '@nestjs/common';
import { CreateLandingServiceDto } from './dto/create-landing-service.dto';
import { UpdateLandingServiceDto } from './dto/update-landing-service.dto';

@Injectable()
export class LandingServicesService {
  create(createLandingServiceDto: CreateLandingServiceDto) {
    return 'This action adds a new landingService';
  }

  findAll() {
    return `This action returns all landingServices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} landingService`;
  }

  update(id: number, updateLandingServiceDto: UpdateLandingServiceDto) {
    return `This action updates a #${id} landingService`;
  }

  remove(id: number) {
    return `This action removes a #${id} landingService`;
  }
}
