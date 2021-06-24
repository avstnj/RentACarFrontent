import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/models/brand/brand';
import { BrandResponseModel } from 'src/app/models/brand/brandResponseModel';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = 'https://localhost:44383/api/';
  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    let newApiUrl = this.apiUrl + 'Brands/getall'
    return this.httpClient
    .get<ListResponseModel<Brand>>(newApiUrl);
  }
}
