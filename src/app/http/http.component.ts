import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpSService} from '../services/http-s.service';
const API_LINK = 'https://jsonplaceholder.typicode.com/posts';
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private httpService: HttpSService
  ) { }

  ngOnInit() {
    this.httpService.getData(API_LINK).subscribe(
      (data) => console.log(data)
    );
  }

  addPost() {
    const data = {
      title: 'foo',
      body: 'bar',
      userId: 1
    };
    this.httpService.postData(API_LINK, data).subscribe(
      (response) => console.log(response)
    );
  }
}
