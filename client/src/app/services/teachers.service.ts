import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Worker} from '../modules/Worker';
@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  apiUrl: string = "http://localhost:65103/Api/Worker";
  constructor(private httpClient: HttpClient) { }
 getAllTeachers():Observable<Worker[]>{
   
return this.httpClient.get<Worker[]>(this.apiUrl+'/GetWorkers'); 
 }
}