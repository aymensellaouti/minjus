import { Injectable } from '@angular/core';
import {Personne} from '../../Model/personne';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  protected personnes: Personne[] = [];
  public selectPersonneSubject = new Subject<Personne>();
  constructor() {
    this.personnes = [
      new Personne(1, 'sellaouti', 'aymen', 37, 'trainer', 77777, 'as.jpg'),
      new Personne(2, 'sellaouti', 'skander', 1, 'bb', 77777, 'zizou.jpeg'),
      new Personne(3, 'worker', 'cherche travail', 31, 'nothing', 77777, '          ')
    ];
  }
  getCvs() {
    return this.personnes;
  }
  // '1' !== 1
  findCvById(id): Personne {
    return this.personnes.find(
      (personne) =>  personne.id === +id
    );
  }
  deletPersonne(personne: Personne) {
    const index = this.personnes.indexOf(personne);
    this.personnes.splice(index, 1);
  }
  selectPersonne(personne: Personne) {
    this.selectPersonneSubject.next(personne);
  }
}
