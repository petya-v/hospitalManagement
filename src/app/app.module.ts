import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { CliniciansListComponent } from './clinicians-list/clinicians-list.component';
import { ClinicianDetailsComponent } from './clinicians-list/clinician-details/clinician-details.component';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {appRoutes} from './hospital.routes';
import { AddSpecialtyComponent } from './clinicians-list/clinician-details/add-specialty/add-specialty.component';
import { SpecialtiesComponent } from './clinicians-list/clinician-details/specialties/specialties.component';
import { AddClinicianComponent } from './clinicians-list/add-clinician/add-clinician.component';
import {PatientsService} from './patients.service';
import {CliniciansService} from './clinicians.service';
import {ConditionsService} from './conditions.service';
import {CliniciansComponent} from './patients-list/patient-details/clinicians/clinicians.component';
import {AddConditionComponent} from './conditions-list/add-condition/add-condition.component';
import {PatientDetailsComponent} from './patients-list/patient-details/patient-details.component';
import {ConditionsListComponent} from './conditions-list/conditions-list.component';
import { ConditionsComponent } from './patients-list/patient-details/conditions/conditions.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PatientsListComponent,
    CliniciansListComponent,
    ClinicianDetailsComponent,
    AddSpecialtyComponent,
    SpecialtiesComponent,
    AddClinicianComponent,
    CliniciansComponent,
    AddConditionComponent,
    PatientDetailsComponent,
    ConditionsListComponent,
    ConditionsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PatientsService, CliniciansService, ConditionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
