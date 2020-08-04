import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ChildWithDetails } from 'src/app/modules/child-with-details';
import { ChildrenService } from 'src/app/services/children.service';
import { FormControl, Validators } from '@angular/forms';
import { Family } from 'src/app/modules/Family';
import { FamiliesService } from 'src/app/services/families.service';
import { Observable } from 'rxjs';
import { AddFamilyComponent } from '../add-family/add-family.component';
import { SchoolsService } from 'src/app/services/schools.service';
import { School } from 'src/app/modules/Subject';

@Component({
  selector: 'app-add-child',
  templateUrl: './add-child.component.html',
  styleUrls: ['./add-child.component.css']
})
export class AddChildComponent implements OnInit {
  families:Family[];
  newFamilies:Family[];
  schools: School[];
  newschools: School[];
  stateCtrl: FormControl = new FormControl();
  filteredStates: Observable<Family[]>;
  fileNameDialogRef: MatDialogRef<AddChildComponent>;
  grades: string[] = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח'];
  constructor(public dialogRef: MatDialogRef<AddChildComponent>,
    @Inject(MAT_DIALOG_DATA) public data:ChildWithDetails,
    public childrenService:ChildrenService,private familyService:FamiliesService,private dialog: MatDialog,
    private schoolService:SchoolsService) { }

  ngOnInit() {
    this.getAllFamilies();
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
      
      getAllFamilies(){
        this.familyService.GetAllFamilies().subscribe(state=>{
          this.families=state;
          this.newFamilies=this.families;
         })
       }

       searchByFamilyName(event){
         this.newFamilies=this.families.filter(p=>p.FamilyName.startsWith(event)==true);
       }

      submit() {
      // emppty stuff
      }
      
      onNoClick(): void {
      this.dialogRef.close();
      }
      // addfamily
      addNew(family: Family) {
        const dialogRef = this.dialog.open(AddFamilyComponent, {
          data: {family: family }
        });
        dialogRef.afterClosed().subscribe(result => {
          if (result === 1) {
            this.familyService.GetAllFamilies().subscribe(state=>{
              this.families=state;
              this.newFamilies=this.families;
            });
          }
        });
      }

      family(familyId){
         this.data.FamilyId=familyId;
      }

      public confirmAdd(): void {
      this.childrenService.AddChildrenWithDetails(this.data).subscribe(state=>this.data=state);
      
      }
      updategrade1NgModel(grade1) {
        this.data.Grade = (this.grades.indexOf(grade1)) + 1;
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
}
