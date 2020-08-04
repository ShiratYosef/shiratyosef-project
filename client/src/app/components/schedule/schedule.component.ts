import { Component, OnInit } from '@angular/core';
import { LessonService } from 'src/app/services/lesson.service';
import { Lesson } from 'src/app/modules/Lesson';
import { Child } from 'src/app/modules/Child';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ChildrenService } from 'src/app/services/children.service';
import { ChildWithDetails } from 'src/app/modules/child-with-details';
import { LassonWithDetails } from 'src/app/modules/lasson-with-details';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
})
export class ScheduleComponent implements OnInit {
  panelOpenState = false;
  day1 = 1;
  constructor(private LessonService: LessonService, private childrenService: ChildrenService) { }
  lessonsForDays: LassonWithDetails[][];
  children: ChildWithDetails[];
  newChildren: ChildWithDetails[];
  stateCtrl: FormControl = new FormControl();
  filteredStates: Observable<Child[]>;
  displayedColumns = ['TeacherName', 'StartsAt', 'SubjectName'];
  exampleDatabase: LessonService | null;
  ngOnInit() {
    this.GetAllChildren();
  }
  GetSchedule(childId) {
    this.LessonService.GetLessonsDaysByChildId(childId).subscribe(state => this.lessonsForDays = state);
  }
  searchByName(event) {
    this.newChildren = this.children.filter(p => p.FirstName.startsWith(event) == true)
  }
  GetAllChildren() {
    this.childrenService.GetAllChildrenWithDetails().subscribe(state => {
      this.children = state;
      this.newChildren = this.children;
    });
  }
  findIndexOfDay(day) {
    var num = this.lessonsForDays.indexOf(day)
    return num;
  }
}
