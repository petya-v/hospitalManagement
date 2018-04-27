import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PatientsService} from '../../patients.service';
import {Patient} from '../../patient';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  patientId: number;
  patient: Patient;

  constructor(private route: ActivatedRoute, private patientsService: PatientsService) { }

  ngOnInit() {
    this.route.params.subscribe( params =>{
      this.patientId = + params['patientId'];
    });

    this.getPatient(this.patientId);
  }

  getPatient(id: number){
    this.patientsService.getPatientById(id).subscribe(patient => this.patient = patient);
  }

}
