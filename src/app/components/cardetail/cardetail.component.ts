import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarModel } from 'src/app/models/car/carModel';
import { CarImage } from 'src/app/models/carImage/carImage';
import { CardetailService } from 'src/app/services/cardetail/cardetail.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Car } from 'src/app/models/car/car';
import { DatePipe } from '@angular/common';
import { RentalService } from 'src/app/services/rental/rental.service';
import { Rental } from 'src/app/models/rental/rental';
import { ToastrService } from 'ngx-toastr';

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
  rentModel: Rental;
  // fromDate:string; 
  // toDate:string;
  todayStartString: string;
  todayEndString: string;
  dataLoaded = false;
  imgUrl = 'https://localhost:44383';
  defaultImage = 'Images/default.JPG';
  constructor(
    private cardetailService: CardetailService,
    private rentalService: RentalService,
    private activatedRoute: ActivatedRoute,
    private config: NgbCarouselConfig,
    private datePipe: DatePipe,
    private toastrService: ToastrService
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
    this.todayStartString = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.todayEndString = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    console.log(this.todayStartString);
  }
  getCarDetailByCarId(carId: number) {
    this.cardetailService.getCarDetailByCarId(carId).subscribe((response) => {
      this.cars = response.data;
      this.carImage = this.cars.carImage;
      this.dataLoaded = true;
    });
  }
  DateQuery(startDate: string, endDate: string) {
    console.log(startDate);
    console.log(endDate);
    console.log(this.cars.carId);
    let carId: number = this.cars.carId;

    this.rentalService.getRentalsByDate(startDate, endDate, carId).subscribe((response) => {
      this.rentModel = response.data;
      if (response.success) {
        this.toastrService.warning(startDate + ' - ' + endDate + ' tarihleri arasında araç kiralanmıştır. Araç teslim tarihi ' + this.rentModel.returnDate);
      }
      else {

      }
      this.dataLoaded = true;
    });
  }
}
