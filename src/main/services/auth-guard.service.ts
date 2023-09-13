import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {Password, routePathLogin, UserName} from '../Constants';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  private readonly username = UserName;
  private readonly password = Password;

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.isAuthenticated()) {
      // Authentication successful, allow access to the route
      return true;
    }


    this.router.navigate([routePathLogin], {
      queryParams: { returnUrl: state.url },
    });

    return false;
  }

  login(username: string, password: string): boolean {
    // Simulate authentication with hardcoded credentials
    if (this.areCredentialsValid(username, password)) {
      localStorage.setItem('authenticated', 'true');
      // Authentication successful
      return true;
    }
    // Authentication failed
    return false;
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('authenticated') === 'true';
  }

  private areCredentialsValid(username: string, password: string): boolean {

    return username === this.username && password === this.password;
  }
}
