import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ChildrenComponent } from './components/children/children.component';
import { ChildComponent } from './components/child/child.component';
import { ChildrenPageComponent } from './components/children-page/children-page.component';
import { ChildDetailsComponent } from './components/child-details/child-details.component';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSelectModule } from "@angular/material/select";
import { SearchByNameChildComponent } from './components/search/search-by-name-child/search-by-name-child.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { WaitingsComponent } from './components/waitings/waitings.component';
import { GroupsComponent } from './components/groups/groups.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GroupDetailsComponent } from './components/group-details/group-details.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { SchoolsComponent } from './components/schools/schools.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { CitiesComponent } from './components/cities/cities.component';
import { AddSchoolComponent } from './components/add-school/add-school.component';
import { EditSchoolComponent } from './components/edit-school/edit-school.component';
import { DeleteSchoolComponent } from './components/delete-school/delete-school.component';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './components/home/home.component';
import { AddSubjectComponent } from './components/IUDSubjects/add-subject/add-subject.component';
import { DeleteSubjectComponent } from './components/IUDSubjects/delete-subject/delete-subject.component';
import { UpdateSubjectComponent } from './components/IUDSubjects/update-subject/update-subject.component';
import { DeleteCityComponent } from './components/IUDCities/delete-city/delete-city.component';
import { UpdateCityComponent } from './components/IUDCities/update-city/update-city.component';
import { AddCityComponent } from './components/IUDCities/add-city/add-city.component';
import { AddWaitingComponent } from './components/IUDWaitings/add-waiting/add-waiting.component';
import { DeleteWaitingComponent } from './components/IUDWaitings/delete-waiting/delete-waiting.component';
import { UpdateWaitingComponent } from './components/IUDWaitings/update-waiting/update-waiting.component';
import { AllChildrenComponent } from './components/all-children/all-children.component';
import { DeleteChildComponent } from './components/IUDallChildren/delete-child/delete-child.component';
import { UpdateChildComponent } from './components/IUDallChildren/update-child/update-child.component';
import { AddChildComponent } from './components/IUDallChildren/add-child/add-child.component';
import { AddFamilyComponent } from './components/IUDallChildren/add-family/add-family.component';
import { HeaderComponent } from './components/header/header.component';
import { MatCardModule } from '@angular/material/card';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { DeleteGroupComponent } from './components/IDGroup/delete-group/delete-group.component';
import { AddGroupComponent } from './components/IDGroup/add-group/add-group.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CheckDetailsComponent } from './components/check-details/check-details.component';
import { CreditDetailsComponent } from './components/credit-details/credit-details.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { DeviationFromAgeComponent } from './components/deviation-from-age/deviation-from-age.component';
import { FooterComponent } from './components/footer/footer.component';




const ROUTES: Routes = [
  { path: "", component: HomeComponent },
  { path: "all-children", component: AllChildrenComponent },
  {
    path: "children-page", component: ChildrenPageComponent, children:
      [{ path: "children", component: ChildrenComponent }, { path: "child-details", component: ChildDetailsComponent }]
  },
  { path: "schedule", component: ScheduleComponent },
  { path: "payments", component: PaymentsComponent },
  { path: "subjects", component: SubjectsComponent },
  { path: "groups", component: GroupsComponent },
  { path: "group-details", component: GroupDetailsComponent },
  { path: "waitings", component: WaitingsComponent },
  { path: "cities", component: CitiesComponent },
  { path: "schools", component: SchoolsComponent },
  { path: "delete-school", component: DeleteSchoolComponent },
  { path: "teachers", component: TeachersComponent },
  {path:"**", component:HomeComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    ChildrenComponent,
    ChildComponent,
    ChildrenPageComponent,
    ChildDetailsComponent,
    ScheduleComponent,
    SearchByNameChildComponent,
    WaitingsComponent,
    GroupsComponent,
    GroupDetailsComponent,
    PaymentsComponent,
    SchoolsComponent,
    SubjectsComponent,
    CitiesComponent,
    AddSchoolComponent,
    EditSchoolComponent,
    DeleteSchoolComponent,
    HomeComponent,
    AddSubjectComponent,
    DeleteSubjectComponent,
    UpdateSubjectComponent,
    DeleteCityComponent,
    UpdateCityComponent,
    AddCityComponent,
    AddWaitingComponent,
    DeleteWaitingComponent,
    UpdateWaitingComponent,
    AllChildrenComponent,
    DeleteChildComponent,
    UpdateChildComponent,
    AddChildComponent,
    AddFamilyComponent,
    HeaderComponent,
    ErrorMessageComponent,
    DeleteGroupComponent,
    AddGroupComponent,
    CheckDetailsComponent,
    CreditDetailsComponent,
    TeachersComponent,
    DeviationFromAgeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatCardModule,
    ScrollingModule
  ],

  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ChildDetailsComponent,
    EditSchoolComponent,
    DeleteSchoolComponent,
    AddSchoolComponent,
    AddSubjectComponent,
    DeleteSubjectComponent,
    UpdateSubjectComponent,
    DeleteCityComponent,
    UpdateCityComponent,
    AddCityComponent,
    AddWaitingComponent,
    DeleteWaitingComponent,
    UpdateWaitingComponent,
    DeleteChildComponent,
    UpdateChildComponent,
    AddChildComponent,
    AddFamilyComponent,
    DeleteGroupComponent,
    AddGroupComponent,
    CheckDetailsComponent,
    CreditDetailsComponent,
    DeviationFromAgeComponent

  ]
})
export class AppModule { }