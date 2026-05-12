import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detall',
  standalone: true,
  template: `<h2>Detall de l’element {{ id }}</h2>`,
})
export class DetallComponent implements OnInit {
  id!: string | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}
