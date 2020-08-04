import { Component, OnInit, ViewChild } from '@angular/core';
import { SchoolsService } from 'src/app/services/schools.service';
import { School } from 'src/app/modules/Subject';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AddSchoolComponent } from '../add-school/add-school.component';
import { EditSchoolComponent } from '../edit-school/edit-school.component';
import { DeleteSchoolComponent } from '../delete-school/delete-school.component';
import { SchoolWithCityName } from 'src/app/modules/school-with-city-name';


@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SchoolsComponent implements OnInit {
schools:SchoolWithCityName[];
displayedColumns = ['actions','Telephon', 'Address', 'CityName','SchoolName','SchoolId'];
exampleDatabase: SchoolsService | null;
stateCtrl: FormControl = new FormControl();
filteredStates: Observable<School[]>;
newSchools:SchoolWithCityName[];
fileNameDialogRef: MatDialogRef<SchoolsComponent>;
index: number;
id: number;
count:number;

@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private schoolsService:SchoolsService, private dialog: MatDialog) { }

  ngOnInit() {
    this.schoolsService.GetAllSchools().subscribe(state => {
      this.schools = state;
    this.newSchools=this.schools;
    this.count=this.newSchools.length;

    });
  }
  searchBySchoolName(event){
    this.newSchools = this.schools.filter(p => p.SchoolName.startsWith(event) == true);
  }
  
  addNew(school: School) {
    const dialogRef = this.dialog.open(AddSchoolComponent, {
      data: {school: school }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.schoolsService.GetAllSchools().subscribe(state=>{
          this.newSchools=state;
          this.schools=this.newSchools;
        });
      }
    });
  }
  startEdit(schoolId:number, SchoolName: string, CityName: string, Address: string, Telephon: string) {
    console.log(this.index);
    const dialogRef = this.dialog.open(EditSchoolComponent, {
      data: {SchoolId:schoolId,SchoolName: SchoolName, CityName: CityName, Address: Address, Telephon: Telephon}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
         this.schoolsService.GetAllSchools().subscribe(state=>{
           this.newSchools=state;
           this.schools=this.newSchools;
          });
      }
    });
  }

    deleteItem(schoolId:number, schoolName: string, CityName: string, address: string, telephon: string) {
      const dialogRef = this.dialog.open(DeleteSchoolComponent, {
        data: {SchoolId:schoolId,SchoolName: schoolName, CityName: CityName, Address: address, Telephon: telephon}
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result === 1) {
           this.schoolsService.GetAllSchools().subscribe(state=>{
             this.newSchools=state;
            this.schools=this.newSchools;
          });
        }
      });
      
    }
}
