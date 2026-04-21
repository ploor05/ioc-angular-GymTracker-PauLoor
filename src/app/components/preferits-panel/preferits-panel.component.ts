import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators, ReactiveFormsModule, NonNullableFormBuilder } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { PreferitsService } from '../../serveis/preferits.service';

@Component({
  selector: 'app-preferits-panel',
  standalone: true,
  imports: [NgFor, NgIf, ReactiveFormsModule],
  templateUrl: './preferits-panel.component.html',
  styleUrls: ['./preferits-panel.component.scss']
})
export class PreferitsPanelComponent implements OnInit {

  formularis!: FormGroup;

  constructor(
    public preferitsService: PreferitsService,
    private fb: NonNullableFormBuilder
  ) {}

  ngOnInit(): void {
    this.formularis = this.fb.group({
      elements: this.fb.array(
        this.preferitsService.preferits().map(elem =>
          this.fb.group({
            id: this.fb.control(elem.id),
            notes: this.fb.array<FormControl<string>>(
              (elem.notes || []).map(n =>
                this.fb.control(n, {
                  validators: [Validators.required, Validators.minLength(3)]
                })
              )
            )
          })
        )
      )
    });
  }

  get elementsFA(): FormArray {
    return this.formularis.get('elements') as FormArray;
  }

  notesFA(index: number): FormArray<FormControl<string>> {
    return this.elementsFA.at(index).get('notes') as FormArray<FormControl<string>>;
  }

  afegirNota(index: number) {
    this.notesFA(index).push(
      this.fb.control('', {
        validators: [Validators.required, Validators.minLength(3)]
      })
    );
  }

  eliminarNota(index: number, notaIndex: number) {
    this.notesFA(index).removeAt(notaIndex);
    this.guardar(index);
  }

  guardar(index: number) {
    const element = this.elementsFA.at(index).value;
    this.preferitsService.actualitzarNotes(element.id, element.notes);
  }
}
