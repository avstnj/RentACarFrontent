import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarModel } from 'src/app/models/car/carModel';
import { CarResponseModel } from 'src/app/models/car/carResponseModel';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:44383/api/';
  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<ListResponseModel<CarModel>> {
    let newApiUrl = this.apiUrl + 'Cars/getCarDetail';
    return this.httpClient
      .get<ListResponseModel<CarModel>>(newApiUrl);
  }
  getCarsByBrandId(brandId: number) {
    console.log(brandId);
    let newApiUrl = this.apiUrl + 'Cars/GetCarsByBrandId?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<CarModel>>(newApiUrl);
  }
  getCarsByColorId(colorId: number) {
    let newApiUrl = this.apiUrl + 'Cars/GetCarsByColorId?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<CarModel>>(newApiUrl);
  }
  getCarsByColorIdAndBrandId(colorId: number,brandId:number) {
    let newApiUrl = this.apiUrl + 'Cars/getCarsByColorIdAndBrandId?colorId=' + colorId +'&brandId='+brandId;
    return this.httpClient.get<ListResponseModel<CarModel>>(newApiUrl);
  }
}
