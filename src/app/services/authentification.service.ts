import {inject, Injectable} from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from '@angular/fire/auth';
import {from, switchMap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private auth: Auth = inject(Auth);
  currentUser$ = authState(this.auth);

  login = (email: string, password: string) => from(signInWithEmailAndPassword(this.auth, email, password));

  logout = () => from(this.auth.signOut());

  signup = (email: string, password: string) => from(createUserWithEmailAndPassword(this.auth, email, password));
}
