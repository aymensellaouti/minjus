import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpSService {

  constructor(
    private http: HttpClient
  ) { }
  getData(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
  postData(url: string, data): Observable<any> {
    return this.http.post(url, data);
  }
}
