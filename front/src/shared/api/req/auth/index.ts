import http from '../../axios';

export async function PostAuth(url: string, data: object) {
  return http.post(url, data);
}
