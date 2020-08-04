import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { Lesson } from '../modules/Lesson';
import { LassonWithDetails } from '../modules/lasson-with-details';


@Injectable({
  providedIn: 'root'
})
export class LessonService {

  
  
  apiUrl: string = "http://localhost:65103/Api/Lessons";
  constructor(private httpClient: HttpClient) { }

GetAllLessons(): Observable<Lesson[]>{
return this.httpClient.get<Lesson[]>(this.apiUrl + '/GetAllLessons');
}

  GetLessonsDaysByChildId(ChildId:string): Observable<LassonWithDetails[][]> {

    return this.httpClient.get<LassonWithDetails[][]>(this.apiUrl + '/GetLessonsDaysByChildId?childId='+ChildId);
  }
  GetLessonsWithDetaisByChildId(ChildId:String): Observable<LassonWithDetails[]> {

    return this.httpClient.get<LassonWithDetails[]>(this.apiUrl + '/GetLessonsWithDetaisByChildId?childId='+ChildId);
  }
  GetLessonsByChildId(ChildId:String): Observable<Lesson[]>{
    return this.httpClient.get<Lesson[]>(this.apiUrl + '/GetLessonsByChildId?childId='+ChildId);
  }

}
