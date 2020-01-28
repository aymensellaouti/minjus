import { Injectable } from '@angular/core';
import {Personne} from '../../Model/personne';
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
const API_LINK = 'https://immense-citadel-91115.herokuapp.com/api/personnes/';
const token = localStorage.getItem('token');
@Injectable({
  providedIn: 'root'
})
export class CvService {
  protected personnes: Personne[] = [];
  public selectPersonneSubject = new Subject<Personne>();
  constructor(
    private http: HttpClient
  ) {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 37, 'trainer', 77777, 'as.jpg'),
      new Personne(2, 'sellaouti', 'skander', 1, 'bb', 77777, 'zizou.jpeg'),
      new Personne(3, 'worker', 'cherche travail', 31, 'nothing', 77777, '          ')
    ];
  }
  getFakeCvs() {
    return this.personnes;
  }
  getCvs(): Observable<Personne[]> {
    return this.http.get<Personne[]>(API_LINK);
  }
  // '1' !== 1
  findFakeCvById(id): Personne {
    return this.personnes.find(
      (personne) =>  personne.id === +id
    );
  }
  findCvById(id): Observable<Personne> {
    return this.http.get<Personne>(API_LINK + id);
  }
  deletPersonne(personne: Personne) {
    const index = this.personnes.indexOf(personne);
    this.personnes.splice(index, 1);
  }
  selectPersonne(personne: Personne) {
    this.selectPersonneSubject.next(personne);
  }
  addCv(personne: Personne) {
    return this.http.post(API_LINK, personne);
  }
  deleteCv(id): Observable<any> {
    return this.http.delete(API_LINK + id);
  }
}
