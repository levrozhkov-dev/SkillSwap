import { Injectable } from '@nestjs/common';
import { GetUsersFilterDto } from './filterDTO';
import datauser from '../db/users.json';

type UserSkills = {
  id: number;
  name: string;
  skill: string;
  category: number;
  subcategory: number;
  description: string;
  imgs: string[];
};

type CategorySelection = {
  idCategory: number;
  idSubCategory: number[];
};

export type Userprops = {
  id: number;
  name: string;
  email: string;
  password: string;
  avatar: string;
  city: string;
  description: string;
  age: number;
  gender: string;
  date: string;
  skills: UserSkills; // теперь объект
  categories: CategorySelection[];
  liked: number;
};

@Injectable()
export class FilterService {
  getUsers(filterDto: GetUsersFilterDto): Userprops[] {
    const { gender, learn } = filterDto;

    return datauser.filter((user) => {
      let matches = true;

      // фильтр по полу
      if (gender && gender !== 'Не имеет значения') {
        matches = matches && user.gender.toLowerCase() === gender.toLowerCase();
      }

      // фильтр по learn
      if (learn && learn !== 'Не имеет значения') {
        if (learn === 'хочу научить') {
          matches =
            matches && Array.isArray(user.skills) && user.skills.length > 0;
        } else if (learn === 'хочу научиться') {
          matches =
            matches &&
            Array.isArray(user.categories) &&
            user.categories.length > 0;
        }
      }

      return matches;
    });
  }
}
