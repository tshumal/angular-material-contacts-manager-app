import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dataStore: {
    users: User[]
  };

  constructor(private http: HttpClient) {
    this.dataStore = { users: [] };
  }

  loadAll() {
    const userUrl = 'https://angular-material-api.azurewebsites.net/users';

    return this.http.get<User []> (userUrl)
      .subscribe(data => {
        this.dataStore.users = data;
      }, error => {
        console.log('failed to fetch users');
      });
  }
}
