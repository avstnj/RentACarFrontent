import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Rental } from 'src/app/models/rental/rental';
import { RentalDetailModel } from 'src/app/models/rental/rentalDetailModel';
import { RentalResponseModel } from 'src/app/models/rental/rentalResponseModel';
import { SingularResponseModel } from 'src/app/models/singularResponseModel';

@Injectable({
  providedIn: 'root',
})
export class RentalService {
  apiUrl = 'https://localhost:44383/api/';
  constructor(private httpClient: HttpClient) { }

  getAllDetails(): Observable<ListResponseModel<RentalDetailModel>> {
    let newApiUrl = this.apiUrl + 'Rentals/getAllDetails';
    return this.httpClient.get<ListResponseModel<RentalDetailModel>>(newApiUrl);
  }
  getRentalsByDate(startdate: string, endDate: string, carId: number): Observable<SingularResponseModel<Rental>> {
    const body = { startDate: startdate, endDate: endDate, carId: carId };
    let newApiUrl = this.apiUrl + 'Rentals/getRentalsByDate';
    return this.httpClient.post<SingularResponseModel<Rental>>(newApiUrl, body);
  }
}
