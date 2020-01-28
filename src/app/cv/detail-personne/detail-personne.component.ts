import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Personne} from '../../Model/personne';
import {CvService} from '../services/cv.service';
import {AuthetificationService} from '../../services/authetification.service';

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
    private router: Router,
    public authenticationService: AuthetificationService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.cvService.findCvById(params.id).subscribe(
          (personne) => this.personne = personne,
          (error)  => this.router.navigate(['cv'])
        );
      }
    );
  }

  deletePersonne() {
    const LINK = ['cv'];
    this.cvService.deleteCv(this.personne.id).subscribe(
      (success) =>  this.router.navigate(LINK),
      (erreur) => console.log(erreur)
    );
  }
}
