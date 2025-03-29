import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormField, MatInput, MatInputModule} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {Router, RouterLink} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AuthentificationService} from '../../services/authentification.service';
import {HotToastService} from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatFormField,
    MatInputModule,
    MatInput,
    MatFormField,
    MatButton,
    RouterLink
  ]
})
export class LoginComponent {
  private authentificationService = inject(AuthentificationService)
  private router = inject(Router);
  private toast = inject(HotToastService);

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  private toastOptions = {
    loading: 'Logging in...',
    success: 'Logged in successfully',
    error: 'Failed to log in'
  };

  login = () => {
    if (!this.loginForm.valid) {
      return;
    }
    const {email, password} = this.loginForm.value;
    this.authentificationService.login(email, password)
      .pipe(this.toast.observe(this.toastOptions))
      .subscribe(
        () => this.router.navigate(['/home'])
      );
  };

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
