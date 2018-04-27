import {Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CliniciansListComponent} from './clinicians-list/clinicians-list.component';
import {PatientsListComponent} from './patients-list/patients-list.component';
import {ClinicianDetailsComponent} from './clinicians-list/clinician-details/clinician-details.component';
import {PatientDetailsComponent} from './patients-list/patient-details/patient-details.component';
import {ConditionsListComponent} from './conditions-list/conditions-list.component';
import {ConditionsComponent} from './patients-list/patient-details/conditions/conditions.component';

export const appRoutes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'clinicians-list', component: CliniciansListComponent},
  {path: 'clinician-details/:clinicianId', component: ClinicianDetailsComponent},
  {path: 'patients-list', component: PatientsListComponent},
  {path: 'patient-details/:patientId', component: PatientDetailsComponent},
  {path: 'specialitiesNames-list', component: ConditionsListComponent},
  {path: 'conditions-list', component: ConditionsListComponent},
];
