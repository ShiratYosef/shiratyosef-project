import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Child } from 'src/app/modules/Child';
import { WaitingsService } from 'src/app/services/waitings.service';
import { FormControl, Validators } from '@angular/forms';
import { Subject } from 'src/app/modules/School';
import { ChildrenService } from 'src/app/services/children.service';
import { SubjectsService } from 'src/app/services/subjects.service';
import { Observable } from 'rxjs';
import { Family } from 'src/app/modules/Family';
import { ChildWithDetails } from 'src/app/modules/child-with-details';
import { ChildRegistrationToSubject } from 'src/app/modules/child-registration-to-subject';

@Component({
  selector: 'app-add-waiting',
  templateUrl: './add-waiting.component.html',
  styleUrls: ['./add-waiting.component.css']
})
export class AddWaitingComponent implements OnInit {
  waiting: ChildRegistrationToSubject = new ChildRegistrationToSubject();
  children: ChildWithDetails[];
  newChildren: ChildWithDetails[];
  subjects: Subject[];
  family: Family = new Family();
  stateCtrl: FormControl = new FormControl();
  filteredStates: Observable<Child[]>;
  waitings:ChildRegistrationToSubject[];
  currentId;
  constructor(public dialogRef: MatDialogRef<AddWaitingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Child,
    public waitingService: WaitingsService, private childrenService: ChildrenService, private subjectService: SubjectsService) { }

  ngOnInit() {
    this.getAllChildren();
    this.getAllSubjects();
    this.getAllWaitings();
  }
  getAllChildren() {
    this.childrenService.GetAllChildrenWithDetails().subscribe(state => {
      this.children = state;
      this.newChildren = this.children;
    });
  }

  GetFamilyDetails(familyId) {
    // alert(event);
    this.currentId = familyId;
    this.childrenService.GetFamilyDetails(familyId).subscribe(state => this.family = state)
  }

  getAllSubjects() {
    this.subjectService.GetAllSubjects().subscribe(state => this.subjects = state);
  }
  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // public confirmAdd(): void {
  // this.waitingService.addWaiting(this.data).subscribe(state=>this.data=state);

  // }
  searchByName(event) {
    this.newChildren = this.children.filter(p => p.FirstName.startsWith(event) == true)
  }
  searchSubject(event) {
    this.subjects.filter(p => p.SubjectName.startsWith(event) == true)
  }

  updateChildId(IdentityNum) {
    this.waiting.ChildId = IdentityNum;
  }
  updateSubjectId(SubjectId) {
    this.waiting.SubjectId = SubjectId;
  }
  getAllWaitings() {
    this.waitingService.GetAllWitings().subscribe(state => this.waitings = state);
  }
  confirmAdd() {
    var child = this.waitings.findIndex(p => p.ChildId == this.waiting.ChildId && p.SubjectId == this.waiting.SubjectId);
    if (child<1)
    this.waitingService.addWaiting(this.waiting).subscribe(res => this.waiting = res);
  }
}
