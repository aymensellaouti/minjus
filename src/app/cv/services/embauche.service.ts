import { Injectable } from '@angular/core';
import {Personne} from '../../Model/personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  embauches: Personne[] = [];
  constructor() { }
  getEmbauches(): Personne[] {
    return this.embauches;
  }
  embaucher(personne: Personne) {
    if (this.embauches.indexOf(personne) === -1) {
      this.embauches.push(personne);
      return 1;
    } else {
      return 0;
    }
  }
}
