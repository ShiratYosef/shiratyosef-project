import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Child } from '../modules/Child';
import { Family } from '../modules/Family';
import { ChildWithDetails } from '../modules/child-with-details';

@Injectable({
  providedIn: 'root'
})
export class ChildrenService {

  apiUrl: string = "http://localhost:65103/Api/Children";
  constructor(private httpClient: HttpClient) { }

  GetAllChildren(): Observable<Child[]> {

    return this.httpClient.get<Child[]>(this.apiUrl + '/GetAllChildren');
  }
 
  GetChildDetails(childId:string): Observable<Child> {
    return this.httpClient.get<Child>(this.apiUrl + '/GetChildById?childId='+childId);
  }
  GetChildWithDetailsById(childId:string): Observable<ChildWithDetails>{
    return this.httpClient.get<ChildWithDetails>(this.apiUrl+'/GetChildWithDetailsById?childId='+childId);

  }
  GetFamilyDetails(FamilyId:number): Observable<Family> {
    return this.httpClient.get<Family>("http://localhost:65103/Api/Families/GetFamilyById?FamilyId="+FamilyId);
  } 
  GetAllChildrenWithDetails(): Observable<ChildWithDetails[]> {
return this.httpClient.get<ChildWithDetails[]>(this.apiUrl+'/GetAllChildrenWithDetails');
  }
  AddChildrenWithDetails(child:ChildWithDetails): Observable<ChildWithDetails>{
return this.httpClient.post<ChildWithDetails>(this.apiUrl+'/AddChildrenWithDetails',child);
  }
  DeleteChildrenWithDetails(childId:string): Observable<ChildWithDetails>{
    return this.httpClient.get<ChildWithDetails>(this.apiUrl+'/DeleteChildrenWithDetails?childId='+childId);
  }
  UpdateChildrenWithDetails(childWithDetails:ChildWithDetails): Observable<ChildWithDetails>{
return this.httpClient.post<ChildWithDetails>(this.apiUrl+'/UpdateChildrenWithDetails',childWithDetails);
  }
}
