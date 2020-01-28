import { Component, OnInit } from '@angular/core';
import {AuthetificationService} from '../services/authetification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage = '';
  constructor(
    private authenticationService: AuthetificationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(credentials) {
    this.authenticationService.login(credentials).subscribe(
      (data: any) => {
        localStorage.setItem('token', data.id);
        this.errorMessage = '';
        this.router.navigate(['cv']);
      },
      (erreur) => {
        console.log(erreur);
        this.errorMessage = 'Veuillez vérifier vos credantials';
      }
    );
  }
}
