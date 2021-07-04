import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarModel } from 'src/app/models/car/carModel';
import { CarImage } from 'src/app/models/carImage/carImage';
import { Color } from 'src/app/models/color/color';
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
  colorFilter: any;
  brandFilter: any;
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
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
  getCarsByColorIdAndBrandId(colorId: number,brandId: number){
    this.carService.getCarsByColorIdAndBrandId(colorId,brandId).subscribe((response) => {
      this.dataCount = response.data.length > 0 ? true : false;
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  filtrele(){
    console.log(this.colorFilter);
    console.log(this.brandFilter);
    if(this.colorFilter != undefined && this.brandFilter != undefined)
      this.getCarsByColorIdAndBrandId(this.colorFilter,this.brandFilter);
    else if(this.colorFilter !=undefined && this.brandFilter == undefined)
      this.getCarsByColorId(this.colorFilter);
    else if(this.colorFilter == undefined && this.brandFilter != undefined)
      this.getCarsByBrandId(this.brandFilter);
    else
      this.getCars();
  }

  setColor(color: any) {
    this.colorFilter = color;
  }
  setBrand(brand: any) {
    this.brandFilter = brand;
  }
}
