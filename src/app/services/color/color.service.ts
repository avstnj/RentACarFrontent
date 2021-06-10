import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorResponseModel } from 'src/app/models/color/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = 'https://localhost:44383/api/';
  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ColorResponseModel>{
    let newApiUrl= this.apiUrl + 'Colors/getall';
    return this.httpClient
    .get<ColorResponseModel>(newApiUrl);
  }
}
