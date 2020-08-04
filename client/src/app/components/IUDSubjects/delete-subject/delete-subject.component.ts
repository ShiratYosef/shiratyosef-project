import { Component, OnInit, Inject } from '@angular/core';
import { SubjectsService } from 'src/app/services/subjects.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-subject',
  templateUrl: './delete-subject.component.html',
  styleUrls: ['./delete-subject.component.css']
})
export class DeleteSubjectComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteSubjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data, public subjectService: SubjectsService) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {

     this.subjectService.deleteSubject(this.data.SubjectId).subscribe(state=>this.data=state);
  }
}
