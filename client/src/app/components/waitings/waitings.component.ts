import { Component, OnInit, Output } from '@angular/core';
import { Subject } from 'src/app/modules/School';
import { SubjectsService } from 'src/app/services/subjects.service';
import { WaitingsService } from 'src/app/services/waitings.service';
import { Child } from 'src/app/modules/Child';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddWaitingComponent } from '../IUDWaitings/add-waiting/add-waiting.component';
import { UpdateWaitingComponent } from '../IUDWaitings/update-waiting/update-waiting.component';
import { DeleteWaitingComponent } from '../IUDWaitings/delete-waiting/delete-waiting.component';
import { EventEmitter } from 'protractor';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ChildWithDetails } from 'src/app/modules/child-with-details';


@Component({
  selector: 'app-waitings',
  templateUrl: './waitings.component.html',
  styleUrls: ['./waitings.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class WaitingsComponent implements OnInit {
 

constructor(private SubjectsService:SubjectsService,private WaitingsService:WaitingsService, private dialog: MatDialog) { }
private subjects:Subject[];
private children:ChildWithDetails[];
newEvent:EventEmitter;
subjectsWithMaxWaitings:Subject[];
displayedColumns = ['actions','Note','JoiningDate','Grade','SchoolName', 'BirthDate','FirstName','FamilyName','IdentityNum'];
exampleDatabase: ChildWithDetails | null;
// stateCtrl: FormControl = new FormControl();
// filteredStates: Observable<Subject[]>;
fileNameDialogRef: MatDialogRef<WaitingsComponent>;
subjectId:number;
count:number;

  ngOnInit() {
    this.getAllSubjects();
  }
  
  getAllSubjects(){
    this.SubjectsService.GetAllSubjects().subscribe(state => this.subjects=state);
  }
  getWaitings(event)
  { 
    this.newEvent=event;
     this.WaitingsService.GetWaitings(event).subscribe(state => {
       this.children=state;
       this.count=this.children.length;

    });
   
  }

  addNew(waiting: Child) {
    const dialogRef = this.dialog.open(AddWaitingComponent, {
      data: {waiting: waiting }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.WaitingsService.GetWaitings(this.newEvent).subscribe(state=>this.children=state);
      }
    });
  }
  // startEdit(IdentityNum:string,FamilyName:number, FirstName: string, BirthDate: Date, SchoolName: number, Grade: number,JoiningDate:Date,Note:string) {
  //   const dialogRef = this.dialog.open(UpdateWaitingComponent, {
  //     data: {SubjectId:this.newEvent,IdentityNum:IdentityNum,FamilyName:FamilyName,FirstName: FirstName, BirthDate: BirthDate, SchoolName: SchoolName, Grade: Grade,JoiningDate:JoiningDate,Note:Note}
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result === 1) {
  //        this.WaitingsService.GetWaitings(this.newEvent).subscribe(state=>this.children=state);
  //     }
  //   });
  // }

    deleteItem(IdentityNum:string,FamilyName:number, FirstName: string, BirthDate: Date, SchoolName: number, Grade: number,JoiningDate:Date,Note:string) {
      const dialogRef = this.dialog.open(DeleteWaitingComponent, {
        data: {SubjectId:this.newEvent,IdentityNum:IdentityNum,FamilyName:FamilyName,FirstName: FirstName, BirthDate: BirthDate, SchoolName: SchoolName, Grade: Grade,JoiningDate:JoiningDate,Note:Note}
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result === 1) {
          this.WaitingsService.GetWaitings(this.newEvent).subscribe(state=>this.children=state);
        }
      });
      
    }
    maxWitingsForSubject(){
      this.WaitingsService.maxWitingsForSubject().subscribe(res=>this.subjectsWithMaxWaitings=res);
    }
}

