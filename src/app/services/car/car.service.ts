import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from 'src/app/models/car/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:44383/api/';
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<CarResponseModel>{
    let newApiUrl = this.apiUrl + 'Cars/getCarDetail';
    return this.httpClient
    .get<CarResponseModel>(newApiUrl);
  }
}
