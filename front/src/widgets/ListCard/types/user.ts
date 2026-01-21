export interface UserSkills {
  id: number;
  name: string;
  skill: string;
  category: number;
  subcategory: number;
  description: string;
  imgs: string[];
}

export interface CategorySelection {
  idCategory: number;
  idSubCategory: number[];
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  avatar: string;
  city: string;
  description: string;
  age: number;
  date: string;
  skills: UserSkills;
  categories: CategorySelection[];
  liked: number;
}
