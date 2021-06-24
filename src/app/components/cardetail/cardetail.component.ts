import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarModel } from 'src/app/models/car/carModel';
import { CarImage } from 'src/app/models/carImage/carImage';
import { CardetailService } from 'src/app/services/cardetail/cardetail.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css'],
})
export class CardetailComponent implements OnInit {
  carImage: CarImage[] = [];
  cars: CarModel = {
    carName: '',
    colorId: 0,
    colorName: '',
    description: '',
    dailyPrice: 0,
    modelYear: 0,
    carId: 0,
    brandId: 0,
    brandName: '',
    carImage: this.carImage,
  };
  dataLoaded = false;
  imgUrl ="https://localhost:44383";
  defaultImage="Images/default.JPG";
  constructor(
    private cardetail: CardetailService,
    private activatedRoute: ActivatedRoute,
    config: NgbCarouselConfig
  ) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      if (param['carId']) {
        this.getCarDetailByCarId(param['carId']);
      } else {
      }
    });
  }
  getCarDetailByCarId(carId: number) {
    this.cardetail.getCarDetailByCarId(carId).subscribe((response) => {
      this.cars = response.data;
      this.carImage=this.cars.carImage;
      this.dataLoaded = true;
    });
  }
}
