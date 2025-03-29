import {inject, Injectable} from '@angular/core';
import {Auth, authState, signInWithEmailAndPassword} from '@angular/fire/auth';
import {from} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private auth: Auth = inject(Auth);
  currentUser$ = authState(this.auth);

  login = (email: string, password: string) => from(signInWithEmailAndPassword(this.auth, email, password));

  logout = () => from(this.auth.signOut());
}
