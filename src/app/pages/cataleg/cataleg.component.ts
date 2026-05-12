import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ElementCardComponent } from '../../components/element-card/element-card.component';
import { ElementService } from '../../serveis/element.service';
import { PreferitsService } from '../../serveis/preferits.service';

@Component({
  selector: 'app-cataleg',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    ScrollingModule,
    ElementCardComponent
  ],
  templateUrl: './cataleg.component.html',
  styleUrls: ['./cataleg.component.scss']
})
export class CatalegComponent {

  constructor(
    public elementService: ElementService,
    public preferitsService: PreferitsService
  ) {}

  reintentar() {
    this.elementService.obtenirPopulars();
  }
}
