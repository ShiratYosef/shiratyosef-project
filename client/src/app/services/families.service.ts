import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Family } from '../modules/Family';

@Injectable({
  providedIn: 'root'
})
export class FamiliesService {

  apiUrl: string = "http://localhost:65103/Api/Families";
  constructor(private httpClient: HttpClient) { }

  GetAllFamilies(): Observable<Family[]> {

    return this.httpClient.get<Family[]>(this.apiUrl + '/GetAllFamilies');
  }
 
  addFamily(family:Family):Observable<Family>{
    return this.httpClient.post<Family>(this.apiUrl+ '/SaveFamily',family)
  }

}
