import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarModel } from 'src/app/models/car/carModel';
import { CarImage } from 'src/app/models/carImage/carImage';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  carImage:CarImage[]=[];
  cars: CarModel[] = [{
    brandId: 0,
    brandName: '',
    carName: '',
    carId: 0,
    colorId: 0,
    colorName: '',
    dailyPrice: 0,
    description: '',
    modelYear: 0,
    carImage:this.carImage
  }];
  dataLoaded = false;
  dataCount = false;
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      console.log(param['brandId']);
      if (param['brandId']) {
        this.getCarsByBrandId(param['brandId']);
      } else if (param['colorId']) {
        this.getCarsByColorId(param['colorId']);
      } else {
        this.getCars();
      }
    });
  }
  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.dataCount = response.data.length > 0 ? true : false;
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsByBrandId(brandId: number) {
    console.log(brandId);
    this.carService.getCarsByBrandId(brandId).subscribe((response) => {
      this.dataCount = response.data.length > 0 ? true : false;
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsByColorId(colorId: number) {
    this.carService.getCarsByColorId(colorId).subscribe((response) => {
      this.dataCount = response.data.length > 0 ? true : false;
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
}
