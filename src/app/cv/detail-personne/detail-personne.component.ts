import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Personne} from '../../Model/personne';
import {CvService} from '../services/cv.service';

@Component({
  selector: 'app-detail-personne',
  templateUrl: './detail-personne.component.html',
  styleUrls: ['./detail-personne.component.css']
})
export class DetailPersonneComponent implements OnInit {
  personne: Personne;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.personne = this.cvService.findCvById(params.id);
      }
    );
  }

  deletePersonne() {
    const LINK = ['cv'];
    this.cvService.deletPersonne(this.personne);
    this.router.navigate(LINK);
  }
}
