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

  constructor(private user: UsersService) {
    this.apiUrl =
      window.localStorage.getItem('apiUrl') || 'http://localhost:5555';
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
    this.user
      .apiGet(this.apiUrl)
      .subscribe((data) => this.setApiResponse(data));
  }
  apiPUT() {
    this.user
      .apiPut(this.apiUrl)
      .subscribe((data) => this.setApiResponse(data));
  }
  apiPOST() {
    this.user
      .apiPost(this.apiUrl)
      .subscribe((data) => this.setApiResponse(data));
  }
  apiPATCH() {
    this.user
      .apiPatch(this.apiUrl)
      .subscribe((data) => this.setApiResponse(data));
  }
  apiDELETE() {
    this.user
      .apiDelete(this.apiUrl)
      .subscribe((data) => this.setApiResponse(data));
  }
  api404() {
    this.user
      .apiGet('http://somerandomurl.com/path-that-does-not-exist')
      .subscribe(
        (data) => this.setApiResponse(data),
        (error) => this.setApiResponse(error)
      );
  }
}
