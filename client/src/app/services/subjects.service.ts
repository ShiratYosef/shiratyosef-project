import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from '../modules/School';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  apiUrl: string = "http://localhost:65103/Api/Subjects";
  constructor(private httpClient: HttpClient) { }

  GetAllSubjects(): Observable<Subject[]> {
    return this.httpClient.get<Subject[]>(this.apiUrl + '/GetAllSubjects');
  }
  addSubject(subject:Subject):Observable<Subject>{
    return this.httpClient.post<Subject>(this.apiUrl+ '/SaveSubject',subject)
  }
  deleteSubject(subjectId:number):Observable<Subject>{
    return this.httpClient.get<Subject>(this.apiUrl+ '/DeleteSubject?subjectId='+subjectId)
  }
  updateSubject(subject:Subject):Observable<Subject>{
    return this.httpClient.post<Subject>(this.apiUrl+ '/UpdateSubject',subject)
  }

}
