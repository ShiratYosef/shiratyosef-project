import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SchoolsService } from 'src/app/services/schools.service';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { City } from 'src/app/modules/City';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-edit-school',
  templateUrl: './edit-school.component.html',
  styleUrls: ['./edit-school.component.css']
})
export class EditSchoolComponent implements OnInit {
  cities: City[];
  newCities: City[];
  stateCtrl: FormControl = new FormControl();
  filteredStates: Observable<City[]>;
  constructor(public dialogRef: MatDialogRef<EditSchoolComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public schoolService: SchoolsService,
    private cityService:CitiesService) { }

  ngOnInit() {
    this.getAllCities();
  }
  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);
  getAllCities(){
    this.cityService.GetAllCities().subscribe(res=>{
      this.cities=res;
    this.newCities=this.cities;
    })
  }
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
  searchByCityName(event) {
    this.newCities = this.cities.filter(p => p.CityName.startsWith(event) == true);
  }
  updateNgModelCity(city) {
    this.data.City = city;
  }
  stopEdit(): void {
    this.schoolService.UpdateSchool(this.data).subscribe(state=>this.data=state);
  }
}
