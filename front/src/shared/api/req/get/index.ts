import http from '../../axios';

export async function Get(url: string) {
  return http.get(url);
}
