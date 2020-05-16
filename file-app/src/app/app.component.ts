import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(
    private http: HttpClient
  ){}


  downloadFile() {
      this.http.get('http://localhost:3000/file', {
        responseType: "blob",
        headers: new HttpHeaders().append("Content-Type", "application/json")
      })
      .subscribe(
        data => {
          saveAs(data, 'myFile.pdf' /*file name */);
        },
        err => {
          alert("Problem while downloading the file.");
          console.error(err);
        }
      );
    }

    openFileInNewTab() {
      this.http.get('http://localhost:3000/file', {
        responseType: "blob",
        headers: new HttpHeaders().append("Content-Type", "application/json")
      })
      .subscribe(
        data => {
          const fileURL = URL.createObjectURL(data);
          window.open(fileURL, '_blank');
        },
        err => {
          alert("Problem while downloading the file.");
          console.error(err);
        }
      );
    }
}
