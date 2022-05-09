import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from '../model/city';
import { Photo } from '../model/photo';

@Injectable({
  providedIn: 'root'
})

export class CityService {

  constructor(private httpClient: HttpClient) { }
  path = "https://localhost:7157/api/";

  getCities(): Observable<City[]> { 
    console.log("city service");
    return this.httpClient.get<City[]>(this.path + "Cities/GetCities");
  }
  getCityById(cityId=0):Observable<City>{
    return this.httpClient.get<City>(this.path + "Cities/GetCityById?id="+ cityId);
  }

  getPhotosByCity(cityId=0):Observable<Photo[]>{
    return this.httpClient.get<Photo[]>(this.path+ "Cities/GetPhotosByCity?cityId="+ cityId);
  }
}
