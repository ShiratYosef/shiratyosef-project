import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { School } from '../modules/Subject';
import { SchoolWithCityName } from '../modules/school-with-city-name';

@Injectable({
  providedIn: 'root'
})
export class SchoolsService {
  dataChange: BehaviorSubject<School[]> = new BehaviorSubject<School[]>([]);
  apiUrl: string = "http://localhost:65103/Api/School";
  dialogData: any;
  constructor(private httpClient: HttpClient) { }
  get data(): School[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  GetAllSchools(): Observable<SchoolWithCityName[]> {

    return this.httpClient.get<SchoolWithCityName[]>(this.apiUrl + '/GetAllSchools');
  }
  addSchool(school: School): Observable<School> {
    return this.httpClient.post<School>(this.apiUrl + '/SaveSchool', school)
  }
  UpdateSchool(school: School): Observable<School> {
    return this.httpClient.post<School>(this.apiUrl + '/UpdateSchool', school)
  }
  DeleteSchool(schoolId: number){
      return this.httpClient.get(this.apiUrl + '/DeleteSchool?schoolId=' + schoolId);
  }

}
