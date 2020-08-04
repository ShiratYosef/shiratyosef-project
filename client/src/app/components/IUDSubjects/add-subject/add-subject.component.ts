import { Component, OnInit, Inject } from '@angular/core';
import { SubjectsService } from 'src/app/services/subjects.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'src/app/modules/School';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {
  addSubjectForm:FormGroup;
  submitted = false;

  constructor(public dialogRef: MatDialogRef<AddSubjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Subject,
    public subjectService:SubjectsService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addSubjectForm = this.formBuilder.group({
      SubjectName: ['',[Validators.required]],
      MinNumOfMeeting: ['',[Validators.maxLength(4),Validators.pattern('^[0-9]*$')]],
      AvgNumOfMeeting:['', [Validators.maxLength(4),Validators.pattern('^[0-9]*$')]],
      MinAge: ['', [Validators.maxLength(2), Validators.minLength(1)]],
      MaxAge: ['', [Validators.maxLength(2), Validators.minLength(1)]],
      DurationInMinuts:['',]
  })
  }

  get f() { return this.addSubjectForm.controls; }

  // formControl = new FormControl('', [
  //   Validators.required
  //   ]);
    
  //   getErrorMessage() {
  //   return this.formControl.hasError('required') ? 'Required field' :
  //   this.formControl.hasError('email') ? 'Not a valid email' :
  //   '';
  //   }
    
    submit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.addSubjectForm.invalid) {
          return;
      }
    }
    
    onNoClick(): void {
    this.dialogRef.close();
    }
    
    public confirmAdd(): void {
    this.subjectService.addSubject(this.data).subscribe(state=>this.data=state);
    
    }
}
