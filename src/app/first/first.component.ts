import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  name = 'aymen';
  isHidden = true;
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // setInterval(() => {
    //   this.isHidden = ! this.isHidden;
    // }, 2000);
    this.activatedRoute.params.subscribe(
       (mesParametres) => {
        console.log(mesParametres);
      }
    );
  }
  showHide() {
    this.isHidden = ! this.isHidden;
  }

  showMessage(monInput) {
    console.log(monInput);
  }
}
