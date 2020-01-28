import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Personne} from '../../Model/personne';
import {CvService} from '../services/cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personnes: Personne[];
  // @Output() forwardPersonne =  new EventEmitter();
  constructor(
    private cvService: CvService
  ) { }

  ngOnInit() {
    this.cvService.getCvs().subscribe(
      (personnes) => this.personnes = personnes,
      (erreur) => {
        this.personnes = this.cvService.getFakeCvs();
        alert('Problème de connexion les données affichées sont fictives');
      }
    );
  }

  // forwardItem(personne: Personne) {
  //   this.forwardPersonne.emit(personne);
  // }
}
