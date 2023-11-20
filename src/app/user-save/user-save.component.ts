import { Component } from '@angular/core';
import { UserSave } from '../interfaces/userSave';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-save',
  templateUrl: './user-save.component.html',
  styleUrl: './user-save.component.css',
})
export class UserSaveComponent {

  user: UserSave = {
    name: 'John Doe',
    username: 'jdoe',
    password: '123',
  };
  constructor(private http: HttpClient) {}

  save() {
    const url = `http://localhost:8081/api/v1/user/save?name=${this.user.name}&username=${this.user.username}&password=${this.user.password}`;
  
    this.http.post<UserSave>(url, {}).subscribe((data) => {
      console.log(data);
      console.log(this.user);
    });
  }
  
}
