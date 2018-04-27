import { Component, OnInit } from '@angular/core';
import {PatientsService} from '../patients.service';
import {Patient} from '../patient';
import {ActivatedRoute} from '@angular/router';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {
  patients: Array<Patient> = [];

  constructor(private patientsService: PatientsService) { }

  ngOnInit() {
    this.getPatients();
  }

  getPatients(){
    this.patientsService.getPatients$().subscribe(patients => this.patients = patients);
  }

}
