import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { City } from 'src/app/modules/City';
import { CitiesService } from 'src/app/services/cities.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddCityComponent>,
    @Inject(MAT_DIALOG_DATA) public data:City,
    public cityService:CitiesService) { }

  ngOnInit() {
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
    
    public confirmAdd(): void {
    this.cityService.addCity(this.data).subscribe(state=>this.data=state);
    
    }
}
