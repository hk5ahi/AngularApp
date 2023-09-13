import { Component } from '@angular/core';
import { faLock as lockedIcon } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  lockIcon = lockedIcon; // Rename the variable for clarity
}
