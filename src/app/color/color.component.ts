import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color: string;
  defaultColor = 'green';
  constructor() { }

  ngOnInit() {
    this.color = this.defaultColor;
  }

  changeColor(color: string) {
    this.color = color;
  }
  reset() {
    this.color = this.defaultColor;
  }
}
