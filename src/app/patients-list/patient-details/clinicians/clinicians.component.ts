import {Component, Input, OnInit} from '@angular/core';
import {CliniciansService} from '../../../clinicians.service';
import {PatientsService} from '../../../patients.service';
import {Clinician} from '../../../clinician';
import {Observable} from 'rxjs/Observable';
import {Patient} from '../../../patient';

@Component({
  selector: 'app-clinicians',
  templateUrl: './clinicians.component.html',
  styleUrls: ['./clinicians.component.css']
})
export class CliniciansComponent implements OnInit {
  @Input() patientId: number;

  constructor(private cliniciansService: CliniciansService,
              private patientsService: PatientsService) { }

  ngOnInit() {
  }

  getClinicians$():Observable<Clinician[]>{
    return this.patientsService.getPatientById(this.patientId)
      .switchMap( (patient: Patient) => {
        let patientObs = patient.assignedClinicians
          .map(clinicianId => this.cliniciansService.getClinicianById(clinicianId));
        return Observable.combineLatest(patientObs);
      })
  }
}
