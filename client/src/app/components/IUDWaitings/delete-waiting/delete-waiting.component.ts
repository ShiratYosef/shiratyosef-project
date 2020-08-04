import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WaitingsService } from 'src/app/services/waitings.service';
import { ChildRegistrationToSubject } from 'src/app/modules/child-registration-to-subject';

@Component({
  selector: 'app-delete-waiting',
  templateUrl: './delete-waiting.component.html',
  styleUrls: ['./delete-waiting.component.css']
})
export class DeleteWaitingComponent implements OnInit {
waiting:ChildRegistrationToSubject=new ChildRegistrationToSubject();
  constructor(public dialogRef: MatDialogRef<DeleteWaitingComponent>,
    @Inject(MAT_DIALOG_DATA) public data, public waitingService: WaitingsService) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.waiting.SubjectId=this.data.SubjectId;
    this.waiting.ChildId=this.data.IdentityNum;
     this.waitingService.DeleteWaitingByObj( this.waiting).subscribe(state=>this.data=state);
  }
}
