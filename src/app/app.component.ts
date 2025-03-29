import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import {AuthentificationService} from './services/authentification.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, MatIcon, MatButton, MatIcon, RouterLink, AsyncPipe]
})
export class AppComponent {
  authentificationService = inject(AuthentificationService);
  private router = inject(Router);

  logout = () => this.authentificationService.logout().subscribe(
    () => this.router.navigate([''])
  )
}
