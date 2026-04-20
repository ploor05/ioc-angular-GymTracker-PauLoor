import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ElementCataleg } from '../models/element-cataleg.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ElementService {

  // Signals privades (es modifiquen des del servei)
  private _elements = signal<ElementCataleg[]>([]);
  private _carregant = signal<boolean>(false);
  private _error = signal<string | null>(null);

  // Signals públiques de lectura
  elements = this._elements.asReadonly();
  carregant = this._carregant.asReadonly();
  error = this._error.asReadonly();

  constructor(private http: HttpClient) {}

  // --- Funcions internes per gestionar estats ---
  private iniciarCarrega() {
    this._carregant.set(true);
    this._error.set(null);
  }

  private finalitzarCarrega() {
    this._carregant.set(false);
  }

  // --- Mètodes públics demanats a l’enunciat ---

  obtenirPopulars(): void {
    this.iniciarCarrega();

    this.http.get<ElementCataleg[]>(`${environment.apiUrl}?popular=true`)
      .subscribe({
        next: (res) => {
          this._elements.set(res);
          this.finalitzarCarrega();
        },
        error: () => {
          this._error.set('No s’han pogut carregar els elements populars.');
          this.finalitzarCarrega();
        }
      });
  }

cercar(terme: string): void {
  this.iniciarCarrega();

  this.http.get<ElementCataleg[]>(`${environment.apiUrl}?name_like=${terme}`)
    .subscribe({
      next: (res) => {
        this._elements.set(res);
        this.finalitzarCarrega();
      },
      error: () => {
        this._error.set('Error en la cerca. Torna-ho a intentar.');
        this.finalitzarCarrega();
      }
    });
}

cercarObservable(terme: string) {
  return this.http.get<ElementCataleg[]>(`${environment.apiUrl}?name_like=${terme}`);
}
}
