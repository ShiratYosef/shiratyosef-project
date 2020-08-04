import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GroupsService } from 'src/app/services/groups.service';
import { Group } from 'src/app/modules/Group';

@Component({
  selector: 'app-delete-group',
  templateUrl: './delete-group.component.html',
  styleUrls: ['./delete-group.component.css']
})
export class DeleteGroupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data, public groupService: GroupsService) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
     this.groupService.DeleteGroup(this.data.code).subscribe(state=>this.data=state);
  }
  

}
