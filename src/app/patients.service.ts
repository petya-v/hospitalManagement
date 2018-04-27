import {EventEmitter, Injectable, Output} from '@angular/core';
import {Http} from '@angular/http';
import {Patient} from './patient';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PatientsService {
  private patientsSubj: BehaviorSubject<Patient[]>;

  constructor(private http: Http) {
    this.patientsSubj = new BehaviorSubject<Patient[]>([]);
  }

  getPatientsFromDB(){
    this.http.get('http://localhost:3000/patients')
      .map(response => response.json().map(patient =>
          new Patient(patient.id, patient.name,
            patient.surname, patient.assignedClinicians,
            patient.conditions))
      ).subscribe(patients => this.patientsSubj.next(patients));
  }

  // RETURNS OBSERVABLE!!!!
  getPatients$() : Observable<Patient[]> {
    return this.patientsSubj.asObservable();
  }

  getPatientById(id: number) : Observable<Patient> {
    return this.getPatients$()
      .map(patients => patients.find( (patient) =>  patient.id === id));
  }
}
