import http from '../../axios';

export async function post(url: string, data: {categoryId: number}) {
  return http.post(url, data);
}
