import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Child } from 'src/app/modules/Child';
import { ChildrenService } from 'src/app/services/children.service';
import { Router } from "@angular/router"
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { ChildDetailsComponent } from '../child-details/child-details.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormControl } from '@angular/forms';
import { School } from 'src/app/modules/Subject';
import { SchoolsService } from 'src/app/services/schools.service';
import { ChildWithDetails } from 'src/app/modules/child-with-details';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ChildrenComponent implements OnInit {

  displayedColumns = ['IsActive','JoiningDate','BirthDate','FamilyName','FirstName','IdentityNum'];
  expandedElement: ChildWithDetails | null;
  children: ChildWithDetails[];
  newChildren: ChildWithDetails[];
  schools: School[];
  stateCtrl: FormControl = new FormControl();
  fileNameDialogRef: MatDialogRef<ChildDetailsComponent>;
  count:number;

  constructor(private ChildrenService: ChildrenService, private router: Router, private dialog: MatDialog, private schoolService: SchoolsService) { }


  ngOnInit() {
    this.GetAllChildren();

  }
  GetAllChildren() {
    this.ChildrenService.GetAllChildrenWithDetails().subscribe(state => {
      this.children = state;
      this.newChildren = this.children;
      this.count=this.newChildren.length;

    }
    );
  }
  GetAllSchools() {
    this.schoolService.GetAllSchools().subscribe(state => this.schools = state);
  }
  ShowChildDetails(row) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.maxHeight = '90vh';
    // var ChildId = event.target.parentElement.cells[0].innerText;

    this.ChildrenService.GetChildWithDetailsById(row.IdentityNum).subscribe(child => {

      dialogConfig.data = child;
      this.fileNameDialogRef = this.dialog.open(ChildDetailsComponent, dialogConfig);
      this.fileNameDialogRef.afterClosed().subscribe(result => {
        if (result === 1) {
          this.ChildrenService.GetAllChildrenWithDetails().subscribe(state => {
            this.newChildren = state;
            this.children = this.newChildren;
          });
        }
      })
    });

  }

  searchByIdNum(event) {
    this.newChildren = this.children.filter(p => p.IdentityNum.startsWith(event) == true)
  }

}
