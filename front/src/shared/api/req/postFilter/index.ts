import http from '../../axios';
type UserFilter = {
  gender?: string | null;
  learn?: string | null;
};
export async function GetUserFilter(url: string, data: UserFilter) {
  return http.post(url, data);
}
