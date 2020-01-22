import { Injectable } from '@angular/core';
import {Personne} from '../../Model/personne';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  protected personnes: Personne[] = [];
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
}
