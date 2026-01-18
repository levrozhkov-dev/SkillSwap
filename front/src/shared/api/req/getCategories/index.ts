import http from '../../axios';

export async function GetCategories(url: string) {
  return http.get(url);
}

export async function GetUserAll(url: string) {
  return http.get(url);
}

export async function GetUsers(url: string) {
  return http.get(url);
}

export async function GetUser(url: string) {
  return http.get(url);
}
