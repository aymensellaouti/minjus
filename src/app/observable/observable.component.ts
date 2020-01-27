import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  observable: Observable<number>;
  imageObservable: Observable<string>;
  paths = [
   '404.png',
    'as.jpg',
    'cv.png'
  ];
  constructor() {
  }
  ngOnInit() {
    this.imageObservable = new Observable<string>(
      (observer) => {
        let i = 0;
        setInterval(
          () => {
            observer.next(this.paths[i++]);
            if (i === this.paths.length) {
              i = 0;
            }
        }, 1000
        );
      }
    );
    let x = 5;
    this.observable = new Observable<number>((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          x = 4;
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    this.observable.subscribe((val) => {
      console.log(val);
    });
    this.observable.pipe(
      map(val => val * 3),
      filter( val => val % 2 === 0)
    ).subscribe((val) => {
      console.log('observable with pipe' + val);
    });
    this.observable.subscribe(
      (val) => console.log( val * 2),
      (erreur) => console.log(erreur),
      () => console.log('Finish')
    );
    console.log('in ngOnInit');
  }

}
