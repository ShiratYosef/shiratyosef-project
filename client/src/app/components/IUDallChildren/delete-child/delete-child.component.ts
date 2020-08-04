import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChildrenService } from 'src/app/services/children.service';

@Component({
  selector: 'app-delete-child',
  templateUrl: './delete-child.component.html',
  styleUrls: ['./delete-child.component.css']
})
export class DeleteChildComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteChildComponent>,
    @Inject(MAT_DIALOG_DATA) public data, public childrenService:ChildrenService) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {

     this.childrenService.DeleteChildrenWithDetails(this.data.IdentityNum).subscribe(state=>this.data=state);
  }
}
