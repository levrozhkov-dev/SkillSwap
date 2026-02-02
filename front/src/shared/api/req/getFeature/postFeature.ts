import http from '../../axios';

export async function postFeature(url: string, data: number[]) {
  return http.post(url, data);
}
