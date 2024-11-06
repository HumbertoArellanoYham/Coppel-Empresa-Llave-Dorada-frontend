import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';

import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'llave-dorada-frontend';
  constructor(private router: Router) {}
}
