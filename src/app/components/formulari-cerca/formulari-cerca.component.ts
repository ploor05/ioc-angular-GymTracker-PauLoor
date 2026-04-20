import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, AsyncValidatorFn, ValidationErrors, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, map, of, switchMap, timer } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ElementService } from '../../services/element.service';

@Component({
  selector: 'app-formulari-cerca',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulari-cerca.component.html',
  styleUrls: ['./formulari-cerca.component.scss']
})
export class FormulariCercaComponent {

  @Output() cerca = new EventEmitter<string>();

  form: FormGroup;

  constructor(private fb: FormBuilder, private elementService: ElementService) {

    this.form = this.fb.group({
      termeCerca: [
        '',
        [
          Validators.minLength(2),
          Validators.maxLength(50)
        ],
        [this.codiDisponibleValidator()]
      ]
    });

    // Cerca automàtica amb debounce
    this.form.get('termeCerca')!.valueChanges
      .pipe(debounceTime(400))
      .subscribe((valor) => {
        if (this.form.valid) {
          this.cerca.emit(valor);
        }
      });
  }

  // --- VALIDACIÓ ASÍNCRONA ---
  codiDisponibleValidator(): AsyncValidatorFn {
    return (control: AbstractControl) => {
      if (!control.value || control.value.length < 2) {
        return of(null);
      }

      return timer(500).pipe(
        switchMap(() =>
          this.elementService.cercarObservable(control.value).pipe(
            map(resultats => {
              return resultats.length === 0 ? { sensResultats: true } : null;
            })
          )
        )
      );
    };
  }

  // Botó netejar
  netejar() {
    this.form.get('termeCerca')!.setValue('');
  }

  get terme() {
    return this.form.get('termeCerca');
  }
}
