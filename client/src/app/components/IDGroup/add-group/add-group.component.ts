import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GroupsService } from 'src/app/services/groups.service';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Group } from 'src/app/modules/Group';
import { School } from 'src/app/modules/Subject';
import { SchoolsService } from 'src/app/services/schools.service';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {
  schools: School[];
  newschools: School[];
  grades: string[] = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח'];
  stateCtrl: FormControl = new FormControl();
  filteredStates: Observable<Group[]>;
  constructor(public dialogRef: MatDialogRef<AddGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public groupService:GroupsService, private schoolService:SchoolsService) { }

  ngOnInit() {
    this.getAllSchools();
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
    searchBySchoolName(event) {
      this.newschools = this.schools.filter(p => p.SchoolName.startsWith(event) == true);
    }
    getAllSchools() {
      this.schoolService.GetAllSchools().subscribe(res => {
        this.schools = res;
        this.newschools = this.schools;
      })
    }
    updateSchoolNameOfNgModel(SchoolId){
      this.data.SchoolId=SchoolId;
    }
    updategrade1NgModel(grade1){
      this.data.grade1=(this.grades.indexOf(grade1)+1);
    }
    updategrade2NgModel(grade2){
      this.data.grade2=(this.grades.indexOf(grade2)+1);
    }
    public confirmAdd(): void {
    this.groupService.AddGroup(this.data).subscribe(state=>this.data=state);
    
    }

}
