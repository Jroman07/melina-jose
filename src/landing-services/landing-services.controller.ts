import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { LandingServicesService } from './landing-services.service';
import { LandingServiceDto } from './dto/Landing-serviceDto';

@Controller('landing-services')
export class LandingServicesController {
  constructor(private landingServicesService: LandingServicesService) {}

  @Post()
  create(@Body() createLandingServiceDto: LandingServiceDto) {
    return this.landingServicesService.create(createLandingServiceDto);
  }

  @Get()
  findAll() {
    return this.landingServicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.landingServicesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateLandingServicesDto: LandingServiceDto) {
    return this.landingServicesService.update(id, updateLandingServicesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.landingServicesService.remove(id);
  }
}
