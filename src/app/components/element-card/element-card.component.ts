import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { ElementCataleg } from '../../models/element-cataleg.model';
import { PreferitsService } from '../../serveis/preferits.service';

@Component({
  selector: 'app-element-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './element-card.component.html',
  styleUrls: ['./element-card.component.scss']
})
export class ElementCardComponent {

  @Input() element!: ElementCataleg;

  constructor(public preferitsService: PreferitsService) {}

  togglePreferit() {
    if (this.preferitsService.esPreferit(this.element.id)) {
      this.preferitsService.eliminarPreferit(this.element.id);
    } else {
      this.preferitsService.afegirPreferit(this.element);
    }
  }
}
