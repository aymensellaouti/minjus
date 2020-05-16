import { Component, OnInit } from '@angular/core';
import {Car} from '../Model/car';
import {SelectItem} from 'primeng/api';
import {CarService} from '../services/car-service';

@Component({
  selector: 'app-table-ng-prime',
  templateUrl: './table-ng-prime.component.html',
  styleUrls: ['./table-ng-prime.component.css']
})
export class TableNgPrimeComponent implements OnInit {

  cars: Car[];

  cols: any[];

  selectedCar: Car;

  brands: SelectItem[];

  colors: SelectItem[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCarsSmall();
    // .then(cars => this.cars = cars);

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];

    this.brands = [
      { label: 'Audi', value: 'Audi' },
      { label: 'BMW', value: 'BMW' },
      { label: 'Fiat', value: 'Fiat' },
      { label: 'Honda', value: 'Honda' },
      { label: 'Jaguar', value: 'Jaguar' },
      { label: 'Mercedes', value: 'Mercedes' },
      { label: 'Renault', value: 'Renault' },
      { label: 'VW', value: 'VW' },
      { label: 'Volvo', value: 'Volvo' }
    ];

    this.colors = [
      { label: 'White', value: 'White' },
      { label: 'Green', value: 'Green' },
      { label: 'Silver', value: 'Silver' },
      { label: 'Black', value: 'Black' },
      { label: 'Red', value: 'Red' },
      { label: 'Maroon', value: 'Maroon' },
      { label: 'Brown', value: 'Brown' },
      { label: 'Orange', value: 'Orange' },
      { label: 'Blue', value: 'Blue' }
    ];
  }

}
