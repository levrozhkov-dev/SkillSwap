import type { User } from './user';

export interface UsersResponse {
  popular: User[];
  new: User[];
  recommended: User[];
}
