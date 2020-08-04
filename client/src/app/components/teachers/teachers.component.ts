import { Component, OnInit } from '@angular/core';
import { TeachersService } from 'src/app/services/teachers.service';
import { Worker } from 'src/app/modules/Worker';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  constructor(private teachersService: TeachersService) { }
  teachers: Worker[];

  displayedColumns = ['actions', 'Id', 'RateForFirstYear', 'Type', 'BirthDate', 'Street', 'City', 'CellPhone', 'Tel', 'FirstName', 'LastName', 'IdentityNum'];

  ngOnInit() {
    this.getTeachers();
  }
  getTeachers() {
    this.teachersService.getAllTeachers().subscribe(res => this.teachers = res);
  }
  startEdit() { }

  deleteItem() { }
















}
