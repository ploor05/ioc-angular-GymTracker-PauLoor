import { Component } from '@angular/core';
import { CatalegComponent } from './pages/cataleg/cataleg.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CatalegComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
