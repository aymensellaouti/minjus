import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-fake-form',
  templateUrl: './fake-form.component.html',
  styleUrls: ['./fake-form.component.css']
})
export class FakeFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  processForm(formulaire: NgForm) {
    console.log(formulaire);
  }
}
