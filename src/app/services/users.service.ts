import {inject, Injectable} from '@angular/core';
import {doc, docData, Firestore, setDoc, updateDoc} from '@angular/fire/firestore';
import {UserProfile} from '../models/UserProfile';
import {from, Observable, of, switchMap} from 'rxjs';
import {AuthentificationService} from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private fireStore = inject(Firestore);
  private authService = inject(AuthentificationService);

  get currentUserProfile$(): Observable<UserProfile | null> {
    return this.authService.currentUser$.pipe(
      switchMap((user) => {
        if (!user?.uid) {
          return of(null);
        }
        const ref = doc(this.fireStore, 'users', user.uid);
        return docData(ref) as Observable<UserProfile>;
      })
    );
  }

  addUser(user: UserProfile): Observable<void> {
    const ref = doc(this.fireStore, 'users', user.uid);
    return from(setDoc(ref, user));
  }

  updateUser(user: UserProfile): Observable<void> {
    const ref = doc(this.fireStore, 'users', user.uid);
    return from(updateDoc(ref, {...user}));
  }
}
