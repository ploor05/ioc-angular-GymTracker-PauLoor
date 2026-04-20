import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { ElementService } from '../../services/element.service';
import { FormulariCercaComponent } from '../../components/formulari-cerca/formulari-cerca.component';

@Component({
  selector: 'app-cataleg',
  standalone: true,
  imports: [NgIf, NgFor, FormulariCercaComponent],
  templateUrl: './cataleg.component.html',
  styleUrls: ['./cataleg.component.scss']
})
export class CatalegComponent {

  constructor(public elementService: ElementService) {
    this.elementService.obtenirPopulars();
  }

  reintentar() {
    this.elementService.obtenirPopulars();
  }
}
