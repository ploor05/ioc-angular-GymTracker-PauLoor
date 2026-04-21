import { Injectable, signal, computed } from '@angular/core';
import { ElementCataleg } from '../models/element-cataleg.model';

@Injectable({
  providedIn: 'root'
})
export class PreferitsService {

  private readonly CLAU = 'preferits-cataleg';

  // Signal principal
  private _preferits = signal<ElementCataleg[]>([]);

  // Lectura pública
  preferits = this._preferits.asReadonly();

  // Computed del total
  totalPreferits = computed(() => this._preferits().length);

  constructor() {
    this.carregarPreferits();
  }

  // --- Càrrega inicial amb try/catch ---
  private carregarPreferits() {
    try {
      const dades = localStorage.getItem(this.CLAU);
      if (dades) {
        this._preferits.set(JSON.parse(dades));
      }
    } catch (error) {
      console.error('Error carregant preferits:', error);
      this._preferits.set([]);
    }
  }

  // --- Guardar a localStorage ---
  private guardarPreferits() {
    try {
      localStorage.setItem(this.CLAU, JSON.stringify(this._preferits()));
    } catch (error) {
      console.error('Error guardant preferits:', error);
    }
  }

  // --- Mètodes públics ---
  afegirPreferit(element: ElementCataleg): void {
    const actuals = this._preferits();
    this._preferits.set([...actuals, element]);
    this.guardarPreferits();
  }

  eliminarPreferit(id: number): void {
    const actuals = this._preferits();
    this._preferits.set(actuals.filter(e => e.id !== id));
    this.guardarPreferits();
  }

  esPreferit(id: number): boolean {
    return this._preferits().some(e => e.id === id);
  }

  // --- Actualitzar notes ---
  actualitzarNotes(id: number, notes: string[]) {
    const actuals = this._preferits();
    const actualitzat = actuals.map(e =>
      e.id === id ? { ...e, notes } : e
    );
    this._preferits.set(actualitzat);
    this.guardarPreferits();
  }
}
