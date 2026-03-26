import { Component, Input } from '@angular/core';
import { Element } from '../../models/element.model';
import { NgIf, CommonModule } from '@angular/common';

@Component({
  selector: 'app-targeta-element',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './targeta-element.component.html',
  styleUrls: ['./targeta-element.component.scss']
})
export class TargetaElementComponent {
  @Input() element!: Element;
}
