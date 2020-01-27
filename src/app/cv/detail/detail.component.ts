import {Component, Input, OnInit} from '@angular/core';
import {Personne} from '../../Model/personne';
import {EmbaucheService} from '../services/embauche.service';
import {Router} from '@angular/router';
import {CvService} from '../services/cv.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() personne: Personne;
  constructor(
    private embaucheService: EmbaucheService,
    private router: Router,
    private cvService: CvService
  ) { }

  ngOnInit() {
    this.cvService.selectPersonneSubject.subscribe(
      (personne) => this.personne = personne
    );
  }
  embaucher() {
    if (!this.embaucheService.embaucher(this.personne)) {
      alert (`${this.personne.name} est déjà embauché`);
    }
  }

  getDetails() {
    const LINK = ['cv', this.personne.id];
    this.router.navigate(LINK);
  }
}
