import { Injectable } from '@nestjs/common';
import { cities } from './../db/city.json';

@Injectable()
export class CitiesService {
  getAllCities(): string[] {
    // Получаем уникальные города
    const citiesSet = new Set(cities.map((city) => city));
    return Array.from(citiesSet);
  }
}
