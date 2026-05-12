import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ElementCataleg } from '../../models/element-cataleg.model';

@Component({
  selector: 'app-element-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './element-card.component.html',
  styleUrls: ['./element-card.component.scss']
})
export class ElementCardComponent {
  @Input() element!: ElementCataleg;
}
