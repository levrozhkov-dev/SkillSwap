export type UserSkills = {
  id: number;
  name: string;
  skill: string;
  category: number;
  subcategory: number;
  description: string;
  imgs: string[];
}[];

export type CategorySelection = {
  idCategory: number;
  idSubCategory: number[];
};

export interface Offer {
  userId: number;
  status: string;
  date: string;
}

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
  favourites: number[];
  receivedOffers: Offer[];
  sentOffers: Offer[];
};
