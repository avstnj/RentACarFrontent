import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from 'src/app/models/rental/rentalResponseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44383/api/';
  constructor(private httpClient: HttpClient) {}

  getAllDetails(): Observable<RentalResponseModel> {
    let newApiUrl = this.apiUrl + 'Rentals/getAllDetails';
    return this.httpClient.get<RentalResponseModel>(newApiUrl);
  }
}
