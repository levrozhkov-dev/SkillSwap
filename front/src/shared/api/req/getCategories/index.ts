import http from '../../axios';

export async function GetCategories(url: string) {
  return http.get(url);
}
