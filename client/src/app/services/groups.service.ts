import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Group } from '../modules/Group'
import { Child } from '../modules/Child';
import { GroupWithSchoolName } from '../modules/group-with-school-name';
import { Lesson } from '../modules/Lesson';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  apiUrl: string = "http://localhost:65103/Api/Groups";
  constructor(private httpClient: HttpClient) { }

  GetAllGroups(): Observable<GroupWithSchoolName[]> {

    return this.httpClient.get<GroupWithSchoolName[]>(this.apiUrl + '/GetAllGroups');
  }
  UpdateGroup(group: Group): Observable<Group> {
    return this.httpClient.post<Group>(this.apiUrl + '/UpdateGroup', group);
  }
  AddGroup(group: Group): Observable<Group> {
    return this.httpClient.post<Group>(this.apiUrl + '/AddGroup', group);
  }
  GetGroupDetails(GroupId: number): Observable<Group[]> {
    return this.httpClient.get<Group[]>(this.apiUrl + '/GetGroupById?GroupId=' + GroupId);
  }
  getChildrenByGroupId(GroupId: number): Observable<Child[]> {
    return this.httpClient.get<Child[]>(this.apiUrl + '/GetChildrenByGroupId?GroupId=' + GroupId);
  }
  // AddChildToGroup(childInGroup: Group): Observable<Group> {
  //   return this.httpClient.post<Group>(this.apiUrl + '/AddChildToGroup', childInGroup);
  // }
  AddChildToGroup(lesson:Lesson): Observable<Lesson> {
    return this.httpClient.post<Lesson>(this.apiUrl + '/AddChildToGroup', lesson);
    // let myParams = new URLSearchParams();
    // myParams.append('childId', childId);
    // myParams.append('groupId',groupId);	
    // let options = new RequestOptions({params: myParams});
    // const parameters = new HttpParams()
    //   .append('childId', childId)
    //   .append('groupId', `${groupId}`);
    // return this.httpClient.get<Group>(this.apiUrl + '/AddChildToGroup?' + parameters);
  }
  DeleteChildFromGroup(childId: string, groupId: number): Observable<Group> {
    const parameters = new HttpParams()
      .append('childId', childId)
      .append('groupId', `${groupId}`);
    return this.httpClient.get<Group>(this.apiUrl + '/DeleteChildFromGroup?' + parameters)
  }
  DeleteGroup(groupId:number):Observable<Group>{
    return this.httpClient.get<Group>(this.apiUrl + '/DeleteGroup?groupId=' + groupId);
  }
}