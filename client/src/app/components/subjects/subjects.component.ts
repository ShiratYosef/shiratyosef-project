import { Component, OnInit, ViewChild } from '@angular/core';
import { SubjectsService } from 'src/app/services/subjects.service';
import { Subject } from 'src/app/modules/School';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { AddSubjectComponent } from '../IUDSubjects/add-subject/add-subject.component';
import { UpdateSubjectComponent } from '../IUDSubjects/update-subject/update-subject.component';
import { DeleteSubjectComponent } from '../IUDSubjects/delete-subject/delete-subject.component';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SubjectsComponent implements OnInit {
  subjects:Subject[];
  newSubjects:Subject[];
  stateCtrl: FormControl = new FormControl();
  displayedColumns = [ 'actions','משך זמן','גיל מקסימום', 'גיל מינימום', 'ממוצע מפגשים', 'מינימום מפגשים','שם מקצוע','קוד מקצוע'];
  exampleDatabase:SubjectsService | null;
  filteredStates: Observable<Subject[]>;
  fileNameDialogRef: MatDialogRef<SubjectsComponent>;
  count:number;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private subjectService:SubjectsService, private dialog: MatDialog) { }

  ngOnInit() {
this.getAllSubjects();
  }
getAllSubjects(){
  this.subjectService.GetAllSubjects().subscribe(state =>{ 
    this.subjects=state;
    this.newSubjects=this.subjects;
    this.count=this.newSubjects.length;

  });
}
searchBySubjectName(event){
  this.newSubjects = this.subjects.filter(p => p.SubjectName.startsWith(event) == true);
}


addNew(subject: Subject) {
  const dialogRef = this.dialog.open(AddSubjectComponent, {
    data: {subject: subject }
  });
  dialogRef.afterClosed().subscribe(result => {
    if (result === 1) {
      // After dialog is closed we're doing frontend updates
      // For add we're just pushing a new row inside DataService
      //  this.exampleDatabase.dataChange.value.push(this.schoolsService.getDialogData());
      // this.refreshTable();
      this.subjectService.GetAllSubjects().subscribe(state=>{
        this.newSubjects=state;
        this.subjects=this.newSubjects;
      });
    }
  });
}
startEdit(SubjectId:number, SubjectName: string, MinNumOfMeeting: number, AvgNumOfMeeting: number, MinAge: number,MaxAge:number,DurationInMinuts:number) {
  // index row is used just for debugging proposes and can be removed
  const dialogRef = this.dialog.open(UpdateSubjectComponent, {
    data: {SubjectId:SubjectId,SubjectName: SubjectName, MinNumOfMeeting: MinNumOfMeeting, AvgNumOfMeeting: AvgNumOfMeeting, MinAge: MinAge,MaxAge:MaxAge,DurationInMinuts:DurationInMinuts}
  });
  dialogRef.afterClosed().subscribe(result => {
    if (result === 1) {
      // const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
      // for delete we use splice in order to remove single object from DataService
      // this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
      //  this.refreshTable();
       this.subjectService.GetAllSubjects().subscribe(state=>{
         this.newSubjects=state;
         this.subjects=this.newSubjects;
        });
    }
  });
}

  deleteItem(SubjectId:number, SubjectName: string, MinNumOfMeeting: number, AvgNumOfMeeting: number, MinAge: number,MaxAge:number,DurationInMinuts:number) {
    // this.id = schoolId;
    const dialogRef = this.dialog.open(DeleteSubjectComponent, {
      data: {SubjectId:SubjectId,SubjectName: SubjectName, MinNumOfMeeting: MinNumOfMeeting, AvgNumOfMeeting: AvgNumOfMeeting, MinAge: MinAge,MaxAge:MaxAge,DurationInMinuts:DurationInMinuts}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
        // for delete we use splice in order to remove single object from DataService
        // this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
        //  this.refreshTable();
         this.subjectService.GetAllSubjects().subscribe(state=>{
           this.newSubjects=state;
           this.subjects=this.newSubjects;
          });
      }
    });
    
  }
}
