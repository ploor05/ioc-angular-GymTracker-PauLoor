import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { ElementService } from '../../services/element.service';
import { FormulariCercaComponent } from '../../components/formulari-cerca/formulari-cerca.component';
import { PreferitsService } from '../../serveis/preferits.service';
import { ElementCardComponent } from '../../components/element-card/element-card.component';
import { PreferitsPanelComponent } from '../../components/preferits-panel/preferits-panel.component';

@Component({
  selector: 'app-cataleg',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    FormulariCercaComponent,
    ElementCardComponent,
    PreferitsPanelComponent
  ],
  templateUrl: './cataleg.component.html',
  styleUrls: ['./cataleg.component.scss']
})
export class CatalegComponent {

  constructor(
    public elementService: ElementService,
    public preferitsService: PreferitsService
  ) {
    // this.elementService.obtenirPopulars();  // Desactivat per l'exercici 4
  }

  reintentar() {
    this.elementService.obtenirPopulars();
  }
}
