import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-barra-cerca',
  standalone: true,
  templateUrl: './barra-cerca.component.html',
  styleUrls: ['./barra-cerca.component.scss']
})
export class BarraCercaComponent {
  @Output() textCerca = new EventEmitter<string>();

  onInput(event: any) {
    this.textCerca.emit(event.target.value);
  }
}
