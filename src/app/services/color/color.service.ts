import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from 'src/app/models/color/color';
import { ColorResponseModel } from 'src/app/models/color/colorResponseModel';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = 'https://localhost:44383/api/';
  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    let newApiUrl= this.apiUrl + 'Colors/getall';
    return this.httpClient
    .get<ListResponseModel<Color>>(newApiUrl);
  }
}
