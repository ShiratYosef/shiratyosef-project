import { Component, OnInit, Input, Inject } from '@angular/core';
import { ChildrenService } from 'src/app/services/children.service';
import { Child } from 'src/app/modules/Child';
import { Family } from 'src/app/modules/Family';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LessonService } from 'src/app/services/lesson.service';
import { Lesson } from 'src/app/modules/Lesson';
import { LassonWithDetails } from 'src/app/modules/lasson-with-details';
import { ChildRegistrationToSubject } from 'src/app/modules/child-registration-to-subject';
import { WaitingsService } from 'src/app/services/waitings.service';
import { ChildWithDetails } from 'src/app/modules/child-with-details';
import { SubjectsService } from 'src/app/services/subjects.service';
import { Subject } from 'src/app/modules/School';
import { Observable } from 'rxjs';
import { City } from 'src/app/modules/City';
import { CitiesService } from 'src/app/services/cities.service';
import { DateAdapter } from '@angular/material/core';
import { School } from 'src/app/modules/Subject';
import { SchoolsService } from 'src/app/services/schools.service';
import { WaitingsWithSubjectName } from 'src/app/modules/waitings-with-subject-name';



@Component({
  selector: 'app-child-details',
  templateUrl: './child-details.component.html',
  styleUrls: ['./child-details.component.css']
})
export class ChildDetailsComponent implements OnInit {
  stateCtrl: FormControl = new FormControl();
  filteredStates: Observable<Subject[]>;
  form: FormGroup;
  child: ChildWithDetails;
  IsSuceessToAddWaiting: boolean;
  childWaiting: ChildRegistrationToSubject = new ChildRegistrationToSubject();
  newchildWaiting: ChildRegistrationToSubject;
  family: Family = new Family();
  lessons: LassonWithDetails[];
  cities: City[];
  newCities: City[];
  subjects: Subject[];
  newSubjects: Subject[];
  schools: School[];
  newSchools: School[];
  age: number;
  grade: string[] = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח'];
  waitings: WaitingsWithSubjectName[];
  displayedColumns = ['TeacherId', 'SubjectName', 'GroupName'];
  exampleDatabase: LessonService | null;
  displayedColumns1 = ['SubjectId', 'SubjectName', 'Comments', 'actions'];
  exampleDatabase1: WaitingsService | null;
  waitingschildren: ChildRegistrationToSubject[];

  constructor(private ChildrenService: ChildrenService, private activatedRoute: ActivatedRoute,
    private waitingsService: WaitingsService, private subjectService: SubjectsService, private cityservice: CitiesService,
    private schoolService: SchoolsService,
    private dialogRef: MatDialogRef<ChildDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) private data, private c: ChildrenService,
    private LessonService: LessonService
  ) {
    this.child = this.data;
  }

  ngOnInit() {
    this.GetLessons();
    this.GetWaitings();
    this.getallSubjects();
    this.getAllCities();
    this.getAllSchools();
    this.calacAge();
    this.getAllWaitings();

  }
  save() {
    this.dialogRef.close(this.form.value);
  }
  // GetChild(ChildId:string)
  // {
  //   this.c.GetChildDetails(ChildId).subscribe(state => this.child=state);

  // }
  close() {
    this.dialogRef.close();
  }
  calacAge() {
    if (this.child.BirthDate) {
      var timeDiff = Math.abs(Date.now() - new Date(this.child.BirthDate).getTime());
      this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    }
  }

  GetLessons() {
    this.LessonService.GetLessonsWithDetaisByChildId(this.child.IdentityNum).subscribe(res => this.lessons = res);
  }
  getAllSchools() {
    this.schoolService.GetAllSchools().subscribe(res => {
      this.schools = res;
      this.newSchools = this.schools;
    })
  }

  GetWaitings() {
    this.waitingsService.getWaitingByChildId(this.child.IdentityNum).subscribe(res => this.waitings = res);
  }
  getAllCities() {
    this.cityservice.GetAllCities().subscribe(res => {
      this.cities = res;
      this.newCities = this.cities;
    })
  }

  updateChild() {
    this.ChildrenService.UpdateChildrenWithDetails(this.child).subscribe(res => this.child = res);
  }
  getallSubjects() {
    this.subjectService.GetAllSubjects().subscribe(data => {
      this.subjects = data;
      this.newSubjects = this.subjects;
    });
  }
  searchBySubjectName(event) {
    this.newSubjects = this.subjects.filter(p => p.SubjectName.startsWith(event) == true);
  }
  getAllWaitings() {
    this.waitingsService.GetAllWitings().subscribe(state => this.waitingschildren = state);
  }
  addWaiting(SubjectId) {
    this.childWaiting.SubjectId = SubjectId;
    this.childWaiting.ChildId = this.child.IdentityNum;
    var child = this.waitingschildren.findIndex(p => p.ChildId == this.childWaiting.ChildId && p.SubjectId == this.childWaiting.SubjectId);
    if (child<1)
      this.waitingsService.addWaiting(this.childWaiting).subscribe(res => {
        this.newchildWaiting = res;
        this.waitingsService.getWaitingByChildId(this.child.IdentityNum).subscribe(res => this.waitings = res);
      });
  }

  searchByCityName(event) {
    this.newCities = this.cities.filter(p => p.CityName.startsWith(event) == true);

  }
  searchBySchoolName(event) {
    this.newSchools = this.schools.filter(p => p.SchoolName.startsWith(event) == true);
  }

  deleteWaiting(SubjectId) {
    this.childWaiting.SubjectId = SubjectId;
    this.childWaiting.ChildId = this.child.IdentityNum;
    this.waitingsService.DeleteWaitingByObj(this.childWaiting).subscribe(res => {
      this.newchildWaiting = res;
      this.waitingsService.getWaitingByChildId(this.child.IdentityNum).subscribe(res => this.waitings = res);
    });

  }
  updataNgModel(grade) {
    this.child.Grade = grade;
  }
  // addcityId
  updateNgModelCity(city) {
    this.child.CityName = city;
  }

  updateNgModelSchool(school) {
    this.child.SchoolName = school;
  }
}


