import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from '../../model/user';

@Injectable()
export class UserService {

    private usersUrl = 'api/users';  // URL to web api

    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    login(login: string, password: string): Promise<User> {
        const url = `${this.usersUrl}/?login=${login}&password=${password}`;

        return this.http.get(url)
            .toPromise()
            .then(response => {
              let user = response.json().data;
              if (user) {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('currentUser', JSON.stringify(user));
              }
              return user;
            })
            .catch(this.handleError);
    }

    logout() : Promise<any> {
      return new Promise(resolve => {
          // remove user from local storage to log user out
          localStorage.removeItem('currentUser');
      });
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
