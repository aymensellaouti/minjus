import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {
  // Coté pére
  // 1-	Ecouter l’evenement
  // 2-	Récupérer les données
  // 3-	traitement
  color = 'green';
  constructor() { }

  ngOnInit() {
  }

  processFilsEvent(color: string) {
    this.color = color;
  }
}
