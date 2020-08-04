import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChildrenService } from 'src/app/services/children.service';
import { Observable } from 'rxjs';
import { School } from 'src/app/modules/Subject';
import { SchoolsService } from 'src/app/services/schools.service';
import { ChildWithDetails } from 'src/app/modules/child-with-details';

@Component({
  selector: 'app-update-child',
  templateUrl: './update-child.component.html',
  styleUrls: ['./update-child.component.css']
})
export class UpdateChildComponent implements OnInit {
  stateCtrl: FormControl = new FormControl();
  schools: School[];
  newschools: School[];
  grades: string[] = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח'];

  // filteredStates: Observable<childr[]>;
  constructor(public dialogRef: MatDialogRef<UpdateChildComponent>,
    @Inject(MAT_DIALOG_DATA) public data:ChildWithDetails, public childrenService: ChildrenService,
    private schoolService:SchoolsService) { }

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

 
  updateSchoolNameOfNgModel(SchoolId){
    this.data.SchoolId=SchoolId;
  }
  getAllSchools() {
    this.schoolService.GetAllSchools().subscribe(res => {
      this.schools = res;
      this.newschools = this.schools;
    })
  }
  searchBySchoolName(event) {
    this.newschools = this.schools.filter(p => p.SchoolName.startsWith(event) == true);
  }
  updategrade1NgModel(grade1) {
    this.data.Grade = (this.grades.indexOf(grade1)) + 1;
  }
  stopEdit(): void {
    this.childrenService.UpdateChildrenWithDetails(this.data).subscribe(state=>this.data=state);
  }
}
