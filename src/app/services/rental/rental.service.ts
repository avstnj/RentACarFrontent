import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Rental } from 'src/app/models/rental/rental';
import { RentalDetailModel } from 'src/app/models/rental/rentalDetailModel';
import { RentalResponseModel } from 'src/app/models/rental/rentalResponseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44383/api/';
  constructor(private httpClient: HttpClient) {}

  getAllDetails(): Observable<ListResponseModel<RentalDetailModel>> {
    let newApiUrl = this.apiUrl + 'Rentals/getAllDetails';
    return this.httpClient.get<ListResponseModel<RentalDetailModel>>(newApiUrl);
  }
}
