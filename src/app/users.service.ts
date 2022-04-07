import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getReqBody() {
    return {
      randomNumber: Math.round(Math.random() * 1000),
    };
  }
  apiGet(url: string) {
    return this.http.get(url);
  }
  apiPost(url: string) {
    return this.http.post(url, this.getReqBody());
  }
  apiPut(url: string) {
    return this.http.put(url, this.getReqBody());
  }
  apiDelete(url: string) {
    return this.http.delete(url);
  }
  apiPatch(url: string) {
    return this.http.patch(url, this.getReqBody());
  }
}
