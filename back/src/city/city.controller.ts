import { Controller, Get } from '@nestjs/common';
import { CitiesService } from './city.service';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get()
  getCities() {
    return { cities: this.citiesService.getAllCities() };
  }
}
