import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  // Cote fils :
  //   1-	Créer emeteur evenement ok
  // 2-	Preparer données ok
  // 3-	Emmetre event avec les données
  @Output() filsEvent = new EventEmitter();
  favoriteColor = 'blue';
  constructor() { }

  ngOnInit() {
  }
  sendDataToPere() {
    this.filsEvent.emit(this.favoriteColor);
  }
}
