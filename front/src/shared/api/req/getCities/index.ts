import http from '../../axios';

export async function GetCities(url: string) {
  return http.get(url);
}
