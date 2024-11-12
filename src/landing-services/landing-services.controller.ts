import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LandingServicesService } from './landing-services.service';
import { CreateLandingServiceDto } from './dto/create-landing-service.dto';
import { UpdateLandingServiceDto } from './dto/update-landing-service.dto';

@Controller('landing-services')
export class LandingServicesController {
  constructor(private readonly landingServicesService: LandingServicesService) {}

  @Post()
  create(@Body() createLandingServiceDto: CreateLandingServiceDto) {
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
  update(@Param('id') id: string, @Body() updateLandingServiceDto: UpdateLandingServiceDto) {
    return this.landingServicesService.update(+id, updateLandingServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.landingServicesService.remove(+id);
  }
}
