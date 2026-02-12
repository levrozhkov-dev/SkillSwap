import { Controller, Get } from '@nestjs/common';
import { CitiesService } from './city.service';
interface City {
  id: number;
  name: string;
}
@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get()
  getAllCities(): City[] {
    return this.citiesService.getAllCities();
  }
}
