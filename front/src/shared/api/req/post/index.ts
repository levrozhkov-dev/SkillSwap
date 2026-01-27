import http from '../../axios';

export async function post(url: string, data: number) {
  return http.post(url, data);
}
