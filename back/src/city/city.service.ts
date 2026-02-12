import { Injectable } from '@nestjs/common';
import cities from '../db/city.json';

interface City {
  id: number;
  name: string;
}

@Injectable()
export class CitiesService {
  getAllCities(): City[] {
    return cities;
  }
}
