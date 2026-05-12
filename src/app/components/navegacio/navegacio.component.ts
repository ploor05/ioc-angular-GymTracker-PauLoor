import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';
import { AuthService } from '../../serveis/auth.service';
import { Observable } from 'rxjs';
import { Usuari } from '../../serveis/auth.service';

@Component({
  selector: 'app-navegacio',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, AsyncPipe, NgIf],
  templateUrl: './navegacio.component.html'
})
export class NavegacioComponent implements OnInit {

  usuari$!: Observable<Usuari | null>;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.usuari$ = this.auth.obtenirUsuari();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
