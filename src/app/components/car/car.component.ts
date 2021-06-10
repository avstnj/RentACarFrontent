import { Component, OnInit } from '@angular/core';
import { CarModel } from 'src/app/models/car/carModel';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: CarModel[] = [];
  dataLoaded = false;
  dataCount = false;
  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getCars();
  }
  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.dataCount = response.data.length > 0 ? true : false;
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
}
