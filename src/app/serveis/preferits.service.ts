import { Injectable } from '@angular/core';
import { ElementCataleg } from '../models/element-cataleg.model';

@Injectable({
  providedIn: 'root'
})
export class PreferitsService {

  private preferits = new Set<number>();

  esPreferit(element: ElementCataleg): boolean {
    return this.preferits.has(element.id);
  }

  togglePreferit(element: ElementCataleg) {
    if (this.preferits.has(element.id)) {
      this.preferits.delete(element.id);
    } else {
      this.preferits.add(element.id);
    }
  }
}
