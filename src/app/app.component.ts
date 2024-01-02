import { Component } from '@angular/core';
import { UsersService } from './users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  apiUrl = '';
  apiResponse = '';
  apiHandler = {
    next: (data: any) => this.setApiResponse(data),
    error: (error: any) => this.setApiResponse(error),
  };
  constructor(private user: UsersService) {
    this.apiUrl =
      window.localStorage.getItem('apiUrl') || 'http://localhost:5555';
    this.apiHandler = {
      next: (data: any) => this.setApiResponse(data),
      error: (error: any) => this.setApiResponse(error),
    };
  }

  updateApiUrl = (value: string) => {
    window.localStorage.setItem('apiUrl', value);
    this.apiUrl = value;
  };

  setApiResponse(value: any) {
    console.log(value);
    this.apiResponse = JSON.stringify(value, null, 2);
  }
  apiGET() {
    this.user.apiGet(this.apiUrl).subscribe();
  }
  apiPUT() {
    this.user.apiPut(this.apiUrl).subscribe(this.apiHandler);
  }
  apiPOST() {
    this.user.apiPost(this.apiUrl).subscribe(this.apiHandler);
  }
  apiPATCH() {
    this.user.apiPatch(this.apiUrl).subscribe(this.apiHandler);
  }
  apiDELETE() {
    this.user.apiDelete(this.apiUrl).subscribe(this.apiHandler);
  }
  api404() {
    this.user.apiGet(`${this.apiUrl}/404`).subscribe(this.apiHandler);
  }
}
