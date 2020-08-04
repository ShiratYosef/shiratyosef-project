import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CitiesService } from 'src/app/services/cities.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-city',
  templateUrl: './update-city.component.html',
  styleUrls: ['./update-city.component.css']
})
export class UpdateCityComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdateCityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public cityService: CitiesService) { }

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

  stopEdit(): void {
    this.cityService.UpdateCity(this.data).subscribe(state=>this.data=state);
  }
}
