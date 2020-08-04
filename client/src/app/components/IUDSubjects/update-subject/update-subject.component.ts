import { Component, OnInit, Inject } from '@angular/core';
import { SubjectsService } from 'src/app/services/subjects.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-subject',
  templateUrl: './update-subject.component.html',
  styleUrls: ['./update-subject.component.css']
})
export class UpdateSubjectComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdateSubjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public subjectService: SubjectsService) { }

  ngOnInit() {
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

  stopEdit(): void {
    this.subjectService.updateSubject(this.data).subscribe(state=>this.data=state);
  }
}
