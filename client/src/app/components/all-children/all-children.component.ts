import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Child } from 'src/app/modules/Child';
import { ChildrenService } from 'src/app/services/children.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { AddChildComponent } from '../IUDallChildren/add-child/add-child.component';
import { UpdateChildComponent } from '../IUDallChildren/update-child/update-child.component';
import { DeleteChildComponent } from '../IUDallChildren/delete-child/delete-child.component';
import { ChildWithDetails } from 'src/app/modules/child-with-details';
import { Worker } from 'src/app/modules/Worker';
import { WorkersService } from 'src/app/services/workers.service';
import { Family } from 'src/app/modules/Family';
import { FamiliesService } from 'src/app/services/families.service';
import { WaitingsService } from 'src/app/services/waitings.service';
import { School } from 'src/app/modules/Subject';
import { SchoolsService } from 'src/app/services/schools.service';
import { EventEmitter } from 'protractor';
import { Lesson } from 'src/app/modules/Lesson';
import { LessonService } from 'src/app/services/lesson.service';
import { ChildRegistrationToSubject } from 'src/app/modules/child-registration-to-subject';
import { isEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-all-children',
  templateUrl: './all-children.component.html',
  styleUrls: ['./all-children.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AllChildrenComponent implements OnInit {
  childrenWithDetails: ChildWithDetails[];
  newchildrenWithDetails: ChildWithDetails[];
  // children:Child[];
  // newChildren:Child[];
  displayedColumns = ['actions', 'Note', 'IsActive', 'SchoolName', 'Grade', 'JoiningDate', 'BirthDate', 'Address', 'Cellular2', 'Cellular1', 'FirstName', 'FamilyName', 'IdentityNum'];
  exampleDatabase: ChildrenService | null;
  stateCtrl: FormControl = new FormControl();
  filteredStates: Observable<Child[]>;
  fileNameDialogRef: MatDialogRef<AllChildrenComponent>;
  teachers: Worker[];
  newTeacher: Worker[];
  waitings: ChildRegistrationToSubject[];
  startDate = new Date();
  schools: School[];
  newSchools: School[];
  grades: string[] = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח'];
  newEvent: EventEmitter;
  lessons: Lesson[];
  newlessons: Lesson[];
  canSearch:boolean=false;
  child: Child = new Child(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
  child1: Child = new Child(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
  childWaiting: Child = new Child(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  
  f: number = 0;
  count:number;

  constructor(private dialog: MatDialog, private childrenService: ChildrenService, private workerService: WorkersService,
    private waitingsService: WaitingsService, private schoolsService: SchoolsService, private lessonsService: LessonService) { }
  ngOnInit() {
    this.getAllChildren();
    this.getAllTeachers();
    this.getAllLessons();
    this.getAllWaitings();
    this.getAllSchools();
  }
  showSearch(){
    this.canSearch=true;
  }
  getAllChildren() {
    this.childrenService.GetAllChildrenWithDetails().subscribe(state => {
      this.childrenWithDetails = state;
      this.newchildrenWithDetails = this.childrenWithDetails;
      this.count=this.newchildrenWithDetails.length;

    });
  }

  getAllTeachers() {
    this.workerService.GetWorkers().subscribe(state => {
      this.teachers = state;
      this.newTeacher = this.teachers;
    })
  }

  getAllWaitings() {
    this.waitingsService.GetAllWitings().subscribe(state => this.waitings = state);
  }

  getAllSchools() {
    this.schoolsService.GetAllSchools().subscribe(state => {
      this.schools = state;
      this.newSchools = this.schools;
    });
  }

  getWaitingsOnClick() {
    this.newchildrenWithDetails = this.childrenWithDetails.filter(p => {
      for (let item of this.waitings) {
        if (item.ChildId == p.IdentityNum)
          return true;
      }
    });
  }

  getAllLessons() {
    this.lessonsService.GetAllLessons().subscribe(state => {
      this.lessons = state;
      this.newlessons = this.lessons;
    })
  }

  searchByName(event) {
    this.newchildrenWithDetails = this.childrenWithDetails.filter(p => p.FirstName.startsWith(event) == true);
  }

  // teacher
  searchByTeacherName(event) {
    this.newTeacher = this.teachers.filter(p => p.FirstName.startsWith(event) == true);
  }

  searchByTeacherId(Id) {
    this.newlessons = this.lessons.filter(p => p.TeacherId == Id);
    this.newchildrenWithDetails = this.childrenWithDetails.filter(p => this.newlessons.forEach(q =>
      p.IdentityNum == q.ChildId
    ));
  }
  // school
  searchBySchoolName(event) {
    this.newSchools = this.schools.filter(p => p.SchoolName.startsWith(event) == true);
    if (event.isEmpty() == true)
      this.newSchools = this.schools;
  }

  searchBySchoolId(SchoolId) {
    this.newchildrenWithDetails = this.childrenWithDetails.filter(p => p.SchoolId == SchoolId);
  }

  //  date
  fromDate(event) {
    this.child.JoiningDate = event;
    // this.newchildrenWithDetails = this.childrenWithDetails.filter(p =>{
    //   return new Date(p.JoiningDate) >= this.child.JoiningDate
    // });
  }

  toDate(event) {
    this.child1.JoiningDate = event;
    // this.fromDate(this.child);
    // this.newchildrenWithDetails.filter(p => new Date(p.JoiningDate) <= this.child1.JoiningDate);
  }

  //   if (this.child1.JoiningDate == null && this.child.JoiningDate == null)
  //   return new Date(p.JoiningDate);
  // else if (this.child.JoiningDate == null) {
  //   return new Date(p.JoiningDate) >= this.child.JoiningDate;
  // }
  // else if (this.child1.JoiningDate == null) {
  //   return new Date(p.JoiningDate) <= this.child1.JoiningDate;
  // }
  // return new Date(p.JoiningDate) >= this.child.JoiningDate
  //   && new Date(p.JoiningDate) <= this.child1.JoiningDate;

  filterByDate() {
    this.newchildrenWithDetails = this.childrenWithDetails.filter(p => {
      let date = new Date(p.JoiningDate)
        return date >= this.child.JoiningDate && date <= this.child1.JoiningDate;
    });
  }

  addNew(child: Child) {
    const dialogRef = this.dialog.open(AddChildComponent, {
      data: { child: child }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.childrenService.GetAllChildrenWithDetails().subscribe(state => {
          this.childrenWithDetails = state;
          this.newchildrenWithDetails = this.childrenWithDetails;
        });
      }
    });
  }
  startEdit(IdentityNum: string, FamilyName: string, FirstName: string,
    BirthDate: Date, Grade: number, SchoolName: string, IsActive: boolean, Note: string) {
    const dialogRef = this.dialog.open(UpdateChildComponent, {
      data: {
        IdentityNum: IdentityNum, FamilyName: FamilyName, FirstName: FirstName,
        BirthDate: BirthDate, Grade: Grade, SchoolName: SchoolName, IsActive: IsActive, Note: Note
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.childrenService.GetAllChildrenWithDetails().subscribe(state => {
          this.childrenWithDetails = state;
          this.newchildrenWithDetails = this.childrenWithDetails;
        });
      }
    });
  }

  deleteItem(IdentityNum: string, FamilyName: string, FirstName: string, Cellular1: string, Cellular2: string, Address: string,
    BirthDate: Date, Grade: number, SchoolName: string, IsActive: boolean, Note: string) {
    const dialogRef = this.dialog.open(DeleteChildComponent, {
      data: {
        IdentityNum: IdentityNum, FamilyName: FamilyName, FirstName: FirstName, Cellular1: Cellular1, Cellular2: Cellular2, Address: Address,
        BirthDate: BirthDate, Grade: Grade, SchoolName: SchoolName, IsActive: IsActive, Note: Note
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.childrenService.GetAllChildrenWithDetails().subscribe(state => {
          this.childrenWithDetails = state;
          this.newchildrenWithDetails = this.childrenWithDetails;
        });
      }
    });

  }
}
