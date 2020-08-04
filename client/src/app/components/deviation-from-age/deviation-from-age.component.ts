import { Component, OnInit, Inject } from '@angular/core';
import { Lesson } from 'src/app/modules/Lesson';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'app-deviation-from-age',
  templateUrl: './deviation-from-age.component.html',
  styleUrls: ['./deviation-from-age.component.css']
})
export class DeviationFromAgeComponent implements OnInit {
  answer1: Lesson;
  obj: Lesson = new Lesson();
  constructor(public dialogRef: MatDialogRef<DeviationFromAgeComponent>
    , @Inject(MAT_DIALOG_DATA) public data, private groupService: GroupsService) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  add() {
    this.obj.ChildId = this.data.ChildId;
    this.obj.GroupId=this.data.GroupId;
    this.groupService.AddChildToGroup(this.obj).subscribe(res => {
      this.answer1 = res;
    });
  }
}
