import http from '../../axios';

export async function postReg(url: string, data: object) {
  return http.post(url, data);
}
