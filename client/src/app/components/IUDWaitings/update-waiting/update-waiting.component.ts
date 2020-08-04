import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WaitingsService } from 'src/app/services/waitings.service';
import { FormControl, Validators } from '@angular/forms';
import { ChildRegistrationToSubject } from 'src/app/modules/child-registration-to-subject';

@Component({
  selector: 'app-update-waiting',
  templateUrl: './update-waiting.component.html',
  styleUrls: ['./update-waiting.component.css']
})
export class UpdateWaitingComponent implements OnInit {
waiting:ChildRegistrationToSubject=new ChildRegistrationToSubject();
 constructor(public dialogRef: MatDialogRef<UpdateWaitingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public waitingsService: WaitingsService) { }

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
    this.waiting.SubjectId=this.data.SubjectId;
    this.waiting.ChildId=this.data.IdentityNum;
    this.waitingsService.UpdateWaiting(this.data).subscribe(state=>this.data=state);
  }
}
