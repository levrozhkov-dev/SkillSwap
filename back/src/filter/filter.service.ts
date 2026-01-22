import { Injectable } from '@nestjs/common';
import { GetUsersFilterDto } from './filterDTO';
import datauser from '../db/users.json';
import citiesFromApi from '../db/city.json';

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
  city: string; // название города
  description: string;
  age: number;
  gender: string;
  date: string;
  skills: UserSkills;
  categories: CategorySelection[];
  liked: number;
};

@Injectable()
export class FilterService {
  getUsers(filterDto: GetUsersFilterDto): Userprops[] {
    const { gender, learn, categories: filterCategories, cities } = filterDto;

    const cityNameToId = new Map(citiesFromApi.map((c) => [c.name, c.id]));

    return datauser.filter((user) => {
      let matches = true;

      if (gender && gender !== 'Не имеет значения') {
        matches = matches && user.gender.toLowerCase() === gender.toLowerCase();
      }

      if (cities && cities.length > 0) {
        const userCityId = cityNameToId.get(user.city);
        if (!userCityId) return false;
        matches = matches && cities.includes(userCityId);
      }

      if (filterCategories && Object.keys(filterCategories).length > 0) {
        const filterCatIds = Object.keys(filterCategories).map(Number);

        const categoryMatch = filterCatIds.every((catId) => {
          const subIds = filterCategories[catId] || [];

          const isAllSub = subIds.length === 0;

          if ((learn === 'Могу научить' || learn === 'Всё') && user.skills) {
            if (isAllSub) return user.skills.category === catId;
            return (
              user.skills.category === catId &&
              subIds.includes(user.skills.subcategory)
            );
          }

          if (
            (learn === 'Хочу научиться' || learn === 'Всё') &&
            user.categories
          ) {
            const userCat = user.categories.find((c) => c.idCategory === catId);
            if (!userCat) return false;

            if (isAllSub) return userCat.idSubCategory.length > 0;
            return subIds.every((subId) =>
              userCat.idSubCategory.includes(subId),
            );
          }

          return false;
        });

        matches = matches && categoryMatch;
      } else {
        if ((!user.categories || user.categories.length === 0) && !user.skills)
          return false;
      }

      return matches;
    });
  }
}
