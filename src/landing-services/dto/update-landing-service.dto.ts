import { PartialType } from '@nestjs/mapped-types';
import { CreateLandingServiceDto } from './create-landing-service.dto';

export class UpdateLandingServiceDto extends PartialType(CreateLandingServiceDto) {}
