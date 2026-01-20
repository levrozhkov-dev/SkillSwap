export interface User {
  id: number;
  name: string;
  avatar: string;

  city: string;
  age: number;

  canTeach: string[];
  wantsToLearn: string[];
}
