import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SchoolsService } from 'src/app/services/schools.service';
import { FormControl, Validators } from '@angular/forms';
import { School } from 'src/app/modules/Subject';
import { City } from 'src/app/modules/City';
import { Observable } from 'rxjs';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.css']
})
export class AddSchoolComponent implements OnInit{
  cities: City[];
  newCities: City[];
  stateCtrl: FormControl = new FormControl();
  filteredStates: Observable<City[]>;
  constructor(public dialogRef: MatDialogRef<AddSchoolComponent>,
    @Inject(MAT_DIALOG_DATA) public data:School,public cityService:CitiesService,
    public schoolService:SchoolsService) { }

formControl = new FormControl('', [
Validators.required
// Validators.email,
]);

getErrorMessage() {
return this.formControl.hasError('required') ? 'Required field' :
this.formControl.hasError('email') ? 'Not a valid email' :
'';
}
ngOnInit() {
  this.getAllCities();

}
submit() {
// emppty stuff
}
getAllCities(){
  this.cityService.GetAllCities().subscribe(res=>{
    this.cities=res;
  this.newCities=this.cities;
  })
}
searchByCityName(event) {
  this.newCities = this.cities.filter(p => p.CityName.startsWith(event) == true);
}
updateNgModelCity(city) {
  this.data.City = city;
}
onNoClick(): void {
this.dialogRef.close();
}

public confirmAdd(): void {
this.schoolService.addSchool(this.data).subscribe(state=>this.data=state);

}
}
