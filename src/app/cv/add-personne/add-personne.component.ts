import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {CvService} from '../services/cv.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
  styleUrls: ['./add-personne.component.css']
})
export class AddPersonneComponent implements OnInit {
  errorMessage = '';
  constructor(
    private cvService: CvService,
    private router: Router
  ) { }
  ngOnInit() {
  }
  addPersonne(formumaire: NgForm) {
    this.cvService.addCv(formumaire.value).subscribe(
      (success) => this.router.navigate(['cv']),
      (erreur) => console.log(erreur)
    );
  }
}
