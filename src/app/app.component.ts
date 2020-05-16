import {Component, OnInit} from '@angular/core';
import {LoggerService} from './services/logger.service';
import {CvService} from './cv/services/cv.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'minjus';
  nbClick = 0;
  selectedFile: File = null;
  personnes;
  constructor(
    private loggerService: LoggerService,
    private cvService: CvService,
    private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.loggerService.logger('mon application a été lancée avec succés');
    this.cvService.selectPersonneSubject.subscribe(
      (personne) => this.nbClick++
    );
    this.http.get('https://127.0.0.1:8000/api/personnes').subscribe(
      (res) => {
        console.log('personne:', res);
        this.personnes = res["hydra:member"];
      }
    );
  }
  selectFile(event) {
    this.selectedFile = event.target.files[0];
  }
  upload() {
      const formData = new FormData();
      formData.append('file', this.selectedFile, this.selectedFile.name);
      const personne = {
        name: 'sellaouti',
        firstname: 'aymen',
        age: 37,
        cin: 1234,
        job: 'teacher',
        profile: ''
      };
      const headers = new HttpHeaders().set('Content-Type', 'multipart/form-data');
      this.http.post('https://127.0.0.1:8000/api/media_objects', formData, {headers}).subscribe(
        (response) => {
          console.log(response);
          personne.profile = response['@id'];
          console.log(personne.profile);
          this.http.post('https://127.0.0.1:8000/api/personnes', personne).subscribe(
            (personneResonse) => console.log(personneResonse)
          );
        }
      );
  }
}
