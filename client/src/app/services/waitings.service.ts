import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from '../modules/School';
import { HttpClient } from '@angular/common/http';
import { Child } from '../modules/Child';
import { ChildRegistrationToSubject } from '../modules/child-registration-to-subject';
import { WaitingsWithSubjectName } from '../modules/waitings-with-subject-name';
import { ChildWithDetails } from '../modules/child-with-details';

@Injectable({
  providedIn: 'root'
})
export class WaitingsService {

  apiUrl: string = "http://localhost:65103/Api/Waitings";
  constructor(private httpClient: HttpClient) { }

  GetAllWitings(): Observable<ChildRegistrationToSubject[]> {
    return this.httpClient.get<ChildRegistrationToSubject[]>(this.apiUrl + '/GetAllWitings');
  }

  GetWaitings(subjectId): Observable<ChildWithDetails[]> {
    return this.httpClient.get<ChildWithDetails[]>(this.apiUrl + `/GetWaitingsChildrenBySubjectId?SubjectId=${subjectId}`);
  }

  addWaiting(child: ChildRegistrationToSubject): Observable<ChildRegistrationToSubject> {
    return this.httpClient.post<ChildRegistrationToSubject>(this.apiUrl + '/AddWaitingChild', child)
  }

  DeleteWaitingByObj(child: ChildRegistrationToSubject): Observable<ChildRegistrationToSubject> {
    return this.httpClient.post<ChildRegistrationToSubject>(this.apiUrl + '/DeleteWaitingByObj', child)
  }

  // UpdateWaiting(child:Child):Observable<Child>{
  //   return this.httpClient.post<Child>(this.apiUrl+ '/UpdateWaiting',child)
  // }

  UpdateWaiting(child: ChildRegistrationToSubject): Observable<ChildRegistrationToSubject> {
    return this.httpClient.post<ChildRegistrationToSubject>(this.apiUrl + '/UpdateWaiting', child)
  }
  // DeleteWaiting(childId:number):Observable<Child>{
  //   return this.httpClient.get<Child>(this.apiUrl+ '/DeleteWaitingWithDetailsByObj?childId='+childId)
  // }

  // GetWaitingsByChildId(childId:String):Observable<ChildRegistrationToSubject[]>{
  //   return this.httpClient.get<ChildRegistrationToSubject[]>(this.apiUrl+ '/GetWaitingsByChildId?childId='+childId)
  // }
  getWaitingByChildId(childId: String): Observable<WaitingsWithSubjectName[]> {
    return this.httpClient.get<WaitingsWithSubjectName[]>(this.apiUrl + '/getWaitingByChildId?childId=' + childId)
  }

  maxWitingsForSubject(): Observable<Subject[]> {
    return this.httpClient.get<Subject[]>(this.apiUrl + '/MaxWitingsForSubject');
  }
}