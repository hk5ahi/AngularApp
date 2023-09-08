import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  private readonly username = 'm.hanan';
  private readonly password = '121212';

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.isAuthenticated()) {
      // Authentication successful, allow access to the route
      return true;
    } else {
      // Redirect to the login page and save the intended URL for later redirection
      this.router.navigate(['/login'], {
        queryParams: { returnUrl: state.url },
      });
      // Authentication failed, prevent access to the route
      return false;
    }
  }

  login(username: string, password: string): boolean {
    // Simulate authentication with hardcoded credentials
    if (username === this.username && password === this.password) {

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
}
