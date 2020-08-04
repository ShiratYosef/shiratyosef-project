import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CitiesService } from 'src/app/services/cities.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { City } from 'src/app/modules/City';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { AddCityComponent } from '../IUDCities/add-city/add-city.component';
import { UpdateCityComponent } from '../IUDCities/update-city/update-city.component';
import { DeleteCityComponent } from '../IUDCities/delete-city/delete-city.component';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CitiesComponent implements OnInit {
  count:number;
  cities:City[];
  displayedColumns = ['actions','CityName','CityId'];
  exampleDatabase: CitiesService | null;
  stateCtrl: FormControl = new FormControl();
  filteredStates: Observable<City[]>;
  newCities:City[];
  fileNameDialogRef: MatDialogRef<CitiesComponent>;
  tateCtrl: FormControl = new FormControl();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private citiesSrvice:CitiesService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getAllCities();
  }
getAllCities(){
  this.citiesSrvice.GetAllCities().subscribe(state=>{
    this.cities=state;
    this.newCities=this.cities;
    this.count=this.newCities.length;
  })
}

searchByCityName(event){
  this.newCities = this.cities.filter(p => p.CityName.startsWith(event) == true);
}

addNew(city: City) {
  const dialogRef = this.dialog.open(AddCityComponent, {
    data: {city: city }
  });
  dialogRef.afterClosed().subscribe(result => {
    if (result === 1) {
      // After dialog is closed we're doing frontend updates
      // For add we're just pushing a new row inside DataService
      //  this.exampleDatabase.dataChange.value.push(this.schoolsService.getDialogData());
      // this.refreshTable();
      this.citiesSrvice.GetAllCities().subscribe(state=>{
        this.newCities=state;
        this.cities=this.newCities;
      });
    }
  });
}
startEdit(CityId:number, CityName: string) {
  const dialogRef = this.dialog.open(UpdateCityComponent, {
    data: {CityId:CityId,CityName: CityName}
  });
  dialogRef.afterClosed().subscribe(result => {
    if (result === 1) {
      // const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
      // for delete we use splice in order to remove single object from DataService
      // this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
      //  this.refreshTable();
      this.citiesSrvice.GetAllCities().subscribe(state=>{
        this.newCities=state;
        this.cities=this.newCities;
      });
    }
  });
}

  deleteItem(CityId:number, CityName: string) {
    // this.id = schoolId;
    const dialogRef = this.dialog.open(DeleteCityComponent, {
      data: {CityId:CityId,CityName: CityName}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
        // for delete we use splice in order to remove single object from DataService
        // this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
        //  this.refreshTable();
        this.citiesSrvice.GetAllCities().subscribe(state=>{
          this.newCities=state;
          this.cities=this.newCities;
        });
      }
    });
    
  }
}
