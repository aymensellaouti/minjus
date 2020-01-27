import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color: string;
  name: string;
  @Input() defaultColor = 'green';
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (data) => {
        this.color = data.couleur;
      }
    );
    this.activatedRoute.queryParams.subscribe(
      (qp) => {
        console.log(qp);
      }
    );
  }

  changeColor(color: string) {
    this.color = color;
  }
  reset() {
    this.color = this.defaultColor;
  }
  resetName() {
    this.name = 'aymen';
  }
}
