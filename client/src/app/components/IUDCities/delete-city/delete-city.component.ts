import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-delete-city',
  templateUrl: './delete-city.component.html',
  styleUrls: ['./delete-city.component.css']
})
export class DeleteCityComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteCityComponent>,
    @Inject(MAT_DIALOG_DATA) public data, public cityService: CitiesService) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {

     this.cityService.DeleteCity(this.data.CityId).subscribe(state=>this.data=state);
  }
}
