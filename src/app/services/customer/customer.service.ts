import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer/customer';
import { CustomerResponseModel } from 'src/app/models/customer/customerResponseModel';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = 'https://localhost:44383/api/';
  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<ListResponseModel<Customer>>{
    let newApiUrl = this.apiUrl + 'Customers/getall';
    return this.httpClient
    .get<ListResponseModel<Customer>>(newApiUrl);
  }
}
