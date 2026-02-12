import axios, { type AxiosInstance } from 'axios';

export class Http {
  private _instance: AxiosInstance;

  constructor(apiUrl: string = '/') {
    this._instance = axios.create({
      baseURL: apiUrl,
      withCredentials: true,
    });
  }
  async post(url: string, data: unknown) {
    return this._instance.post(url, data);
  }

  async get(url: string) {
    return this._instance.get(url);
  }
}
