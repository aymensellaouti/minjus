import { Component, OnInit } from '@angular/core';
import {AuthetificationService} from '../services/authetification.service';
import {Router, RoutesRecognized} from '@angular/router';
import {AppRoutingModule} from '../app-routing.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public authenticationService: AuthetificationService,
    private router: Router ) { }

  ngOnInit() {
    console.log(this.router.config);
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['login']);
  }

}
