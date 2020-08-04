import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/modules/Group'
import { GroupsService } from 'src/app/services/groups.service';
import { animate, state, style, transition, trigger, group } from '@angular/animations';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GroupDetailsComponent } from '../group-details/group-details.component';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { GroupWithSchoolName } from 'src/app/modules/group-with-school-name';
import { DeleteGroupComponent } from '../IDGroup/delete-group/delete-group.component';
import { AddGroupComponent } from '../IDGroup/add-group/add-group.component';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class GroupsComponent implements OnInit {
  public groups: GroupWithSchoolName[];
  newGroups: GroupWithSchoolName[];
  grades: string[] = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח']
  stateCtrl: FormControl = new FormControl();
  filteredStates: Observable<GroupWithSchoolName[]>;
  displayedColumns = ['actions','SchoolName','grade2','grade1','GroupName','code'];
  expandedElement: GroupWithSchoolName | null;
  fileNameDialogRef: MatDialogRef<GroupDetailsComponent>;
  count:number;

  constructor(private Groupservice: GroupsService, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.GetAllGroups();

  }

  GetAllGroups() {
    this.Groupservice.GetAllGroups().subscribe(state => {
      this.groups = state;
      this.newGroups = this.groups;
      this.count=this.newGroups.length;

    });
  }
  searchByGroupName(event) {
    this.newGroups = this.groups.filter(p => p.GroupName.startsWith(event) == true)

  }

  // ShowGroupDetails(event) {

  //   const dialogConfig = new MatDialogConfig();

  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;
  //   var GroupId = event.target.parentElement.cells[0].innerText;

  //   this.Groupservice.GetGroupDetails(GroupId).subscribe(group => {
  //     dialogConfig.data = group;
  //     const dialogRef = this.fileNameDialogRef = this.dialog.open(GroupDetailsComponent, dialogConfig);
  //     dialogRef.afterClosed().subscribe(result => {
  //       if (result === 1) {
  //         this.Groupservice.GetAllGroups().subscribe(state => {
  //           this.groups = state;
  //           this.newGroups = this.groups;
  //         });
  //       }
  //     });
  //   });
  // }
  ShowGroupDetails(code:number, GroupName: string,grade1:number,grade2:number,SchoolName:string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.maxHeight = '90vh';
    dialogConfig.data={code:code,GroupName: GroupName,grade1:grade1,grade2:grade2,SchoolName:SchoolName};
    this.fileNameDialogRef = this.dialog.open(GroupDetailsComponent,dialogConfig);
    this.fileNameDialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.Groupservice.GetAllGroups().subscribe(state=>{
          this.newGroups=state;
          this.groups=this.newGroups;
        });
      }
    });
  }
  deleteItem(code:number, GroupName: string,grade1:number,grade2:number,SchoolName:string) {
    const dialogRef = this.dialog.open(DeleteGroupComponent,{ 
      data:{code:code,GroupName: GroupName,grade1:grade1,grade2:grade2,SchoolName:SchoolName}});
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
         this.Groupservice.GetAllGroups().subscribe(state=>{
           this.newGroups=state;
           this.groups=this.newGroups;
          });
      }
    });
    
  }
  addNew(group: Group) {
    const dialogRef = this.dialog.open(AddGroupComponent, {
      data: {group: group }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.Groupservice.GetAllGroups().subscribe(state=>{
          this.newGroups=state;
          this.groups=this.newGroups;
        });
      }
    });
  }
}