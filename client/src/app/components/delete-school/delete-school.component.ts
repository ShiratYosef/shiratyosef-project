import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SchoolsService } from 'src/app/services/schools.service';
import { School } from 'src/app/modules/Subject';

@Component({
  selector: 'app-delete-school',
  templateUrl: './delete-school.component.html',
  styleUrls: ['./delete-school.component.css']
})
export class DeleteSchoolComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DeleteSchoolComponent>,
    @Inject(MAT_DIALOG_DATA) public data, public schoolService: SchoolsService) 
    { 

    }
  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {

     this.schoolService.DeleteSchool(this.data.SchoolId).subscribe(state=>this.data=state);
  }

}
