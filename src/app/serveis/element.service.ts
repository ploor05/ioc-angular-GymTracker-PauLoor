import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ElementCataleg } from '../models/element-cataleg.model';

@Injectable({
  providedIn: 'root'
})
export class ElementService {

  private elementsSubject = new BehaviorSubject<ElementCataleg[]>([]);
  private elementSeleccionatSubject = new BehaviorSubject<ElementCataleg | null>(null);

  elements() {
    return this.elementsSubject.value;
  }

  elementSeleccionat$ = this.elementSeleccionatSubject.asObservable();

  obtenirPopulars() {
  }

  obtenirPerId(id: number) {
  }
}
