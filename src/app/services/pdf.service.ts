import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

const APIKEY = '5c1d312e82f21b1e121cd8db60cf9e11';
const APIURI = 'https://127.0.0.1:8000/pdf';
@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor(
    private http: HttpClient
  ) { }
  getPdf(html) {
    // const params = new HttpParams().set('access_key', APIKEY);
    return this.http.get(APIURI, {
      responseType: 'blob',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
}
