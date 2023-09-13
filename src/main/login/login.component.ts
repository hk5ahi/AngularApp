import { Component } from '@angular/core';
import { AuthGuardService } from '../services/auth-guard.service';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthGuardService, private router: Router) {}

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      // Authentication successful, navigate to the dashboard
      this.router.navigate(['/dashboard']); // You can choose to navigate to 'dashboard/home' based on your preference
    } else {
      // Authentication failed, display an error message
      alert('Authentication failed. Please check your credentials.');
    }
  }

  // Define the faLock icon
  faLock = faLock;
}
