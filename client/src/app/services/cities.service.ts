import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { City } from '../modules/City';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  dataChange: BehaviorSubject<City[]> = new BehaviorSubject<City[]>([]);
  apiUrl: string = "http://localhost:65103/Api/Cities";
  dialogData: any;
  constructor(private httpClient: HttpClient) { }
  get data(): City[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  GetAllCities(): Observable<City[]> {

   return this.httpClient.get<City[]>(this.apiUrl + '/GetAllCities');
  }
  addCity(city:City):Observable<City>{
    return this.httpClient.post<City>(this.apiUrl+ '/SaveCity',city)
  }
  UpdateCity(city:City):Observable<City>{
    return this.httpClient.post<City>(this.apiUrl+ '/UpdateCity',city)
  }
  DeleteCity(cityId:number):Observable<City>{
return this.httpClient.get<City>(this.apiUrl+ '/DeleteCity?cityId='+cityId)
  }
  
}
