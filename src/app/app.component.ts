import {Component, OnInit} from '@angular/core';
import {LoggerService} from './services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'minjus';
  constructor(
    private loggerService: LoggerService
  ) {}

  ngOnInit(): void {
    this.loggerService.logger('mon application a été lancée avec succés');
  }
}
