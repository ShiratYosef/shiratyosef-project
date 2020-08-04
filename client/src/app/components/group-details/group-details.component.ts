import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Group } from 'src/app/modules/Group';
import { GroupsService } from 'src/app/services/groups.service';
import { ActivatedRoute } from '@angular/router';
import { School } from 'src/app/modules/Subject';
import { Child } from 'src/app/modules/Child';
import { ChildrenService } from 'src/app/services/children.service';
import { ChildWithDetails } from 'src/app/modules/child-with-details';
import { LessonService } from 'src/app/services/lesson.service';
import { SchoolsService } from 'src/app/services/schools.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { GroupWithSchoolName } from 'src/app/modules/group-with-school-name';
import { Lesson } from 'src/app/modules/Lesson';
import { DeviationFromAgeComponent } from 'src/app/components/deviation-from-age/deviation-from-age.component';


@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css']
})
export class GroupDetailsComponent implements OnInit {
  group: Group;
  schoolName: string;
  child: string = "";
  schools: School[];
  newschools: School[];
  grades: string[] = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח'];
  answer1: Lesson;
  answer: Group;
  groups: GroupWithSchoolName[];
  children: Child[];
  ageChild: ChildWithDetails;
  age: number;
  childrenWithDetails: ChildWithDetails[];
  newchildrenWithDetails: ChildWithDetails[];
  displayedColumns = ['actions','FirstName','IdentityNum'];
  exampleDatabase: ChildrenService | null;
  stateCtrl: FormControl = new FormControl();
  stateCtrl1: FormControl = new FormControl();
  filteredStates: Observable<Group[]>;
  lesson: Lesson = new Lesson();
  constructor(private dialogRef: MatDialogRef<GroupDetailsComponent>, private dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private groupService: GroupsService, private childrenService: ChildrenService,
    @Inject(MAT_DIALOG_DATA) private data, private lessonService: LessonService, private schoolService: SchoolsService
  ) {
    this.group = this.data;
    this.schoolName = this.data.SchoolName;
  }

  ngOnInit() {
    this.getChildren();
    this.getChildrenByGroupId();
    this.getAllSchools();
  }
  GetAllGroups() {
    this.groupService.GetAllGroups().subscribe(state =>
      this.groups = state
    );
  }
  getAllSchools() {
    this.schoolService.GetAllSchools().subscribe(res => {
      this.schools = res;
      this.newschools = this.schools;
    })
  }
  getChildren() {
    this.childrenService.GetAllChildrenWithDetails().subscribe(res => {
      this.childrenWithDetails = res;
      this.newchildrenWithDetails = this.childrenWithDetails;
    });
  }
  getChildrenByGroupId() {
    this.groupService.getChildrenByGroupId(this.group.code).subscribe(res => this.children = res);
  }
  searchByChildName(event) {
    this.newchildrenWithDetails = this.childrenWithDetails.filter(p => p.FirstName.startsWith(event) == true);

  }
  searchBySchoolName(event) {
    this.newschools = this.schools.filter(p => p.SchoolName.startsWith(event) == true);
  }
  updateSchoolNameOfNgModel(SchoolId) {
    this.group.SchoolId = SchoolId;
  }
  updategrade1NgModel(grade1) {
    this.group.grade1 = (this.grades.indexOf(grade1)) + 1;
  }
  updategrade2NgModel(grade2) {
    this.group.grade2 = (this.grades.indexOf(grade2)) + 1;
  }

  addChildTGroup(IdentityNum) {
    this.lesson.ChildId = IdentityNum;
    this.lesson.GroupId = this.group.code;
    this.ageChild = this.childrenWithDetails.find(p => p.IdentityNum == this.lesson.ChildId);
    if (this.ageChild.Grade < this.group.grade1 || this.ageChild.Grade > this.group.grade2) {
      const dialogRef = this.dialog.open(DeviationFromAgeComponent, {
        data: { ChildId: this.lesson.ChildId, GroupId: this.lesson.GroupId }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result === 1) {
          this.groupService.getChildrenByGroupId(this.group.code).subscribe(res => this.children = res);
        }
      })
    }
    else {
      // this.lesson.Subject=this.group.TreatmentType;
      this.groupService.AddChildToGroup(this.lesson).subscribe(res => {
        this.answer1 = res;
        this.groupService.getChildrenByGroupId(this.group.code).subscribe(res => this.children = res);
      });
    }
  }
  deleteChildFromGroup(IdentityNum) {
    this.groupService.DeleteChildFromGroup(IdentityNum, this.group.code).subscribe(res => {
      this.answer = res;
      this.groupService.getChildrenByGroupId(this.group.code).subscribe(res => this.children = res);
    })
  }
  confirmAdd() {
    // if (!this.group.SchoolId)
    //   this.group.SchoolId = schollId;
    this.groupService.UpdateGroup(this.group).subscribe(res => {
      this.answer = res;
      // this.groupService.GetAllGroups().subscribe(state =>
      //   this.groups = state
      // );
    });
    // this.dialogRef.close();
  }
}
