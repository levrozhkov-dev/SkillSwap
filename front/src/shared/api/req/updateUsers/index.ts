import http from '../../axios';

export async function updateUser(url: string, data: any) {
  return http.post(url, data);
}
