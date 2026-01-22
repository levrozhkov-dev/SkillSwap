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
  skills: UserSkills;
  categories: CategorySelection[];
  liked: number;
};

@Injectable()
export class FilterService {
  getUsers(filterDto: GetUsersFilterDto): Userprops[] {
    const { gender, learn, categories: filterCategories } = filterDto;

    return datauser.filter((user) => {
      let matches = true;

      if (gender && gender !== 'Не имеет значения') {
        matches = matches && user.gender.toLowerCase() === gender.toLowerCase();
      }

      if (learn && learn !== 'Не имеет значения') {
        if (learn === 'Могу научить') {
          const hasSkill =
            user.skills != null &&
            typeof user.skills === 'object' &&
            Object.keys(user.skills).length > 0;

          if (!hasSkill) return false;

          if (filterCategories && Object.keys(filterCategories).length > 0) {
            const skillCatId = user.skills.category;
            const skillSubId = user.skills.subcategory;

            const allCatsMatch = Object.entries(filterCategories).every(
              ([catId, subIds]) =>
                Number(catId) === skillCatId &&
                (subIds as number[]).includes(skillSubId),
            );

            matches = matches && allCatsMatch;
          }
        } else if (learn === 'Хочу научиться') {
          if (!Array.isArray(user.categories) || user.categories.length === 0)
            return false;

          if (filterCategories && Object.keys(filterCategories).length > 0) {
            const allCatsMatch = Object.entries(filterCategories).every(
              ([catId, subIds]) => {
                const userCat = user.categories.find(
                  (c) => c.idCategory === Number(catId),
                );
                if (!userCat) return false;

                return (subIds as number[]).every((subId) =>
                  userCat.idSubCategory.includes(subId),
                );
              },
            );

            matches = matches && allCatsMatch;
          }
        }
      }

      return matches;
    });
  }
}
