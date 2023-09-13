import { Component } from '@angular/core';
import { AuthGuardService } from '../services/auth-guard.service';
import { Router } from '@angular/router';
import { faLock as lockedIcon } from '@fortawesome/free-solid-svg-icons';
import { routePathDashboard } from '../Constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: string = '';
  lockIcon = lockedIcon;

  constructor(private authService: AuthGuardService, private router: Router) {}

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      // Login successful, navigate to the dashboard
      this.router.navigate([routePathDashboard]);
    } else {
      // Authentication failed, display an error message
      this.loginError = 'Authentication failed. Please check your credentials.';
    }
  }
}
