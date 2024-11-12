import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LandingServicesService } from './landing-services.service';
import { LandingServiceDto } from './dto/Landing-serviceDto';

@Controller('landing-services')
export class LandingServicesController {
  constructor(private readonly landingServicesService: LandingServicesService) {}

  @Post()
  create(@Body() createLandingServiceDto: LandingServiceDto) {
    return this.landingServicesService.create(createLandingServiceDto);
  }

  @Get()
  findAll() {
    return this.landingServicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.landingServicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLandingServiceDto: LandingServiceDto) {
    return this.landingServicesService.update(+id, updateLandingServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.landingServicesService.remove(+id);
  }
}
