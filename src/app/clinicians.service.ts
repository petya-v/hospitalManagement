import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Clinician} from './clinician';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class CliniciansService {
  private cliniciansSubj: BehaviorSubject<Clinician[]>;

  constructor(private http: Http) {
    this.cliniciansSubj = new BehaviorSubject<Clinician[]>([]);
  }

  getCliniciansFromDB() {
    this.http.get('http://localhost:3000/clinicians')
      .map(response => response.json()
        .map(clinician =>
          new Clinician(clinician.id,
            clinician.name, clinician.surname, clinician.specialities)
        )).subscribe( clinicians => this.cliniciansSubj.next(clinicians));
  }

  getClinicians$() : Observable<Clinician[]> {
    return this.cliniciansSubj.asObservable();
  }

  getClinicianById(id: number) : Observable<Clinician> {
    return this.getClinicians$()
      .map(clinicians => clinicians.find(clinician => clinician.id === id));
  }

  addClinician(name: string, surname: string): Observable<Clinician>{
    let url = 'http://localhost:3000/clinicians';
    return this.http.post(url,new Clinician(0, name, surname,[]))
      .map(clinician => clinician.json());
  }

  removeClinicianSpeciality(clinicianId: number, specialitiesIds: Array<number>) {
    let url = 'http://localhost:3000/clinicians/' + clinicianId;
    return this.getClinicianById(clinicianId).switchMap( (clinician: Clinician) => {
      clinician.specialities = specialitiesIds;
      return <any> this.http.put(url, clinician);
    });
  }

    addClinicianSpeciality(clinicianId: number, specialityId: number): Observable<any> {
      let url = 'http://localhost:3000/clinicians/' + clinicianId;
      return this.getClinicianById(clinicianId).switchMap((clinician : Clinician) => {
          clinician.specialities.push(specialityId);
          return <any> this.http.put(url, clinician);
        });
    }

}
