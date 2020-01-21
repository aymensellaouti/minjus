import { Component, OnInit } from '@angular/core';
import {Personne} from '../../Model/personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personnes: Personne[];
  constructor() { }

  ngOnInit() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 37, 'trainer', 77777, 'as.jpg'),
      new Personne(1, 'sellaouti', 'aymen', 37, 'trainer', 77777, 'as.jpg')
    ];
  }

}
