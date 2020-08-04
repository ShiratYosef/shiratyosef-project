import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Family } from 'src/app/modules/Family';
import { FamiliesService } from 'src/app/services/families.service';
import { FormControl, Validators } from '@angular/forms';
import { CitiesService } from 'src/app/services/cities.service';
import { City } from 'src/app/modules/City';

@Component({
  selector: 'app-add-family',
  templateUrl: './add-family.component.html',
  styleUrls: ['./add-family.component.css']
})
export class AddFamilyComponent implements OnInit {
  cities: City[];
  newCities: City[];
  family: Family = new Family();
  constructor(public dialogRef: MatDialogRef<AddFamilyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Family,
    public familyService: FamiliesService, public cityService: CitiesService) { }

  ngOnInit() {
    this.getAllCities();
  }

  getAllCities() {
    this.cityService.GetAllCities().subscribe(state => {
      this.cities = state;
      this.newCities = this.cities;
    })
  }

  // searchCity(event) {
  //   this.newCities = this.cities.filter(p => p.CityName.startsWith(event) == true);
  // }

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

  city(cityId) {
    this.data.CityId = cityId;
  }

  public confirmAdd(): void {
    this.familyService.addFamily(this.data).subscribe(state => this.data = state);

  }
}
