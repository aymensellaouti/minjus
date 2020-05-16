import {Component, OnInit, ViewChild} from '@angular/core';
import {UIChart} from 'primeng/chart';
import * as html2pdf from 'html2pdf.js';
import {PdfService} from '../services/pdf.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  data: any;
  // @ts-ignore
  @ViewChild('chart') chart: UIChart;
  constructor(
    private pdfService: PdfService
  ) {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#4bc0c0',
          hoverBackgroundColor : 'lightblue'
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#565656',
          hoverBackgroundColor : 'lightblue'
        }
      ]
    };
  }
    // this.data = {
    //   labels: ['A', 'B', 'C'],
    //   datasets: [
    //     {
    //       data: [300, 50, 100],
    //       backgroundColor: [
    //         '#FF6384',
    //         '#36A2EB',
    //         '#FFCE56'
    //       ],
    //       hoverBackgroundColor: [
    //         '#FF6384',
    //         '#36A2EB',
    //         '#FFCE56'
    //       ]
    //     }]
    // };
  ngOnInit() {
  }
  updateData() {
    console.log('cc');
    this.data.labels.push('newLabel');
    this.data.datasets.push(
      {
        label: 'New Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: '#4bc0c0',
        hoverBackgroundColor : 'lightgreen'
      },
    );
    this.chart.refresh();
  }
  logData(donnees: any) {
    console.log(donnees);
  }

  getData(datas: any) {
    console.log(datas.element);
  }

  getPdf(element) {
    const options = {
      filename: 'myPdf',
      image: {type: 'jpeg'},
      html2canvas: {},
      jsPDF: {
        orientation: 'landscape'
      }
    };
    this.pdfService.getPdf(element).subscribe(
      (response) => console.log(response)
    );
    // html2pdf()
    //   .from(element)
    //   .set(options)
    //   .save();
  }
}
