import {Component, OnInit} from '@angular/core';
import {LoggerService} from './services/logger.service';
import {CvService} from './cv/services/cv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'minjus';
  nbClick = 0;
  constructor(
    private loggerService: LoggerService,
    private cvService: CvService
  ) {}

  ngOnInit(): void {
    this.loggerService.logger('mon application a été lancée avec succés');
    this.cvService.selectPersonneSubject.subscribe(
      (personne) => this.nbClick++
    )
  }
}
