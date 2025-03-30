import {Component, inject, OnInit} from '@angular/core';
import {AuthentificationService} from '../../services/authentification.service';
import {AsyncPipe} from '@angular/common';
import {MatFormField, MatInput} from '@angular/material/input';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {UsersService} from '../../services/users.service';
import {HotToastService} from '@ngneat/hot-toast';
import {UserProfile} from '../../models/UserProfile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  standalone: true,
  imports: [
    AsyncPipe,
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatButton,
    FormsModule
  ],
})
export class ProfileComponent implements OnInit {
  authentificationService = inject(AuthentificationService)
  usersService = inject(UsersService);
  private toast = inject(HotToastService);

  user$ = this.authentificationService.currentUser$;
  profileForm = new FormGroup({
    uid: new FormControl(''),
    displayName: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
  });

  ngOnInit(): void {
    this.usersService.currentUserProfile$
      .subscribe((user) => this.profileForm.patchValue({...user}));
  }

  saveProfile() {
    const profileData = this.profileForm.value;
    if(!profileData.uid) {
      return
    }
    const userProfile: UserProfile = {
      uid: profileData.uid,
      displayName: profileData.displayName,
      firstName: profileData.firstName,
      lastName: profileData.lastName,
      phone: profileData.phone,
      address: profileData.address
    }
    this.usersService
      .updateUser(userProfile)
      .pipe(
        this.toast.observe({
          loading: 'Saving profile data...',
          success: 'Profile updated successfully',
          error: 'There was an error in updating the profile',
        })
      )
      .subscribe();
  }
}
