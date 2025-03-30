import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormField, MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {MatError} from '@angular/material/form-field';
import {AuthentificationService} from '../../services/authentification.service';
import {HotToastService} from '@ngneat/hot-toast';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.css',
  standalone: true,
  imports: [
    MatButton,
    MatError,
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatButton,
    MatFormField,
    MatButton
  ],
})
export class SingUpComponent {
  authService: AuthentificationService = inject(AuthentificationService);
  toast = inject(HotToastService);
  router: Router = inject(Router);

  singUpForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  });
  toastOptions = {
    loading: 'Creating account...',
    success: 'Account created successfully',
    error: 'Failed to create'
  };

  singUp() {
    if (!this.singUpForm.valid) {
      return;
    }
    const {name, email, password} = this.singUpForm.value;
    this.authService.signup(name, email, password)
      .pipe(this.toast.observe(this.toastOptions))
      .subscribe(() => this.router.navigate(['/home']));
  }

  get name() {
    return this.singUpForm.get('name');
  }

  get email() {
    return this.singUpForm.get('email');
  }

  get password() {
    return this.singUpForm.get('password');
  }

  get confirmPassword() {
    return this.singUpForm.get('confirmPassword');
  }

}
