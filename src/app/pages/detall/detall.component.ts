import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ElementService } from '../../serveis/element.service';
import { Observable } from 'rxjs';
import { ElementCataleg } from '../../models/element-cataleg.model';

@Component({
  selector: 'app-detall',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './detall.component.html',
  styleUrls: ['./detall.component.scss']
})
export class DetallComponent implements OnInit {

  element$!: Observable<ElementCataleg | null>;

  constructor(
    private route: ActivatedRoute,
    private elementService: ElementService
  ) {}

  ngOnInit(): void {
    this.element$ = this.elementService.elementSeleccionat$;
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.elementService.obtenirPerId(id);
  }
}
