import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from 'src/app/models/rental/rentalResponseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44383/api/Rentals/';
  constructor(private httpClient: HttpClient) {}

  getAllDetails(): Observable<RentalResponseModel> {
    this.apiUrl += 'getAllDetails';
    return this.httpClient.get<RentalResponseModel>(this.apiUrl);
  }
}
