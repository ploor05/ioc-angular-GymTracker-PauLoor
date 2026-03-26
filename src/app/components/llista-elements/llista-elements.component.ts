import { Component } from '@angular/core';
import { DADES_MOCK } from '../../mocks/dades-mock';
import { Element } from '../../models/element.model';
import { TargetaElementComponent } from '../targeta-element/targeta-element.component';
import { BarraCercaComponent } from '../barra-cerca/barra-cerca.component';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-llista-elements',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, TargetaElementComponent, BarraCercaComponent],
  templateUrl: './llista-elements.component.html',
  styleUrls: ['./llista-elements.component.scss']
})
export class LlistaElementsComponent {
  elements: Element[] = DADES_MOCK;

  textFiltre: string = '';
  textFormulari: string = '';

  get elementsFiltrats(): Element[] {
    return this.elements.filter(e =>
      e.name.toLowerCase().includes(this.textFiltre.toLowerCase())
    );
  }

  actualitzarFiltre(text: string) {
    this.textFiltre = text;
  }

  aplicarCerca() {
    this.textFiltre = this.textFormulari;
  }

  trackById(index: number, item: Element): number {
    return item.id;
  }
}
