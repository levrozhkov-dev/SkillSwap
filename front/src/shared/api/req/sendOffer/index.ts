import http from '../../axios';

export async function sendOffer(url: string, data: {	senderId: number,
	receiverId:number}) {
  return http.post(url, data);
}
