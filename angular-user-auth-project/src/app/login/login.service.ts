import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './User';
import { userMock } from './users.mock';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private routerService: Router) {}
  loggedIn = false;
  login(user: User): any {
    return new Promise((resolve) => {
      this.loggedIn = true;
      localStorage.setItem('username', user.username);
      localStorage.setItem('password', user.password);
      resolve(true);
    });
  }

  getPermission(page?: string): boolean {
    const username = localStorage.getItem('username');
    const perm = userMock
      .find((x) => x.username === username)
      .pages.find((pag) => pag.name === page)?.visible;

    return perm;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
  logOut() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    this.loggedIn = false;
    this.routerService.navigate(['/login']);
  }
}
