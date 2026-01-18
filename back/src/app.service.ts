import { Injectable } from '@nestjs/common';
import categoriesData from './db/category.json';

@Injectable()
export class AppService {
  getCategories(): object {
    return categoriesData;
  }
}
