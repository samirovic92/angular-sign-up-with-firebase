import {Component, inject} from '@angular/core';
import {AuthentificationService} from '../../services/authentification.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
  imports: [
    AsyncPipe
  ],
})
export class HomeComponent {
  private authentificationService = inject(AuthentificationService);
  user$ = this.authentificationService.currentUser$;

}
