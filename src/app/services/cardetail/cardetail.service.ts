import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarModel } from 'src/app/models/car/carModel';
import { SingularResponseModel } from 'src/app/models/singularResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CardetailService {
  
  apiUrl = 'https://localhost:44383/api/';
  constructor(private httpClient: HttpClient) { }

  getCarDetailByCarId(carId: number) {
    let newApiUrl = this.apiUrl + 'Cars/getCarDetailByCarId?carId=' + carId;
    return this.httpClient.get<SingularResponseModel<CarModel>>(newApiUrl);
  }
}
