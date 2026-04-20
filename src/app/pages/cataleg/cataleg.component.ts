import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { ElementService } from '../../services/element.service';

@Component({
  selector: 'app-cataleg',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './cataleg.component.html',
  styleUrls: ['./cataleg.component.scss']
})
export class CatalegComponent {

  constructor(public elementService: ElementService) {
    // Carregar elements populars en entrar
    this.elementService.obtenirPopulars();
  }

  reintentar() {
    this.elementService.obtenirPopulars();
  }
}
