import { Component, OnInit } from '@angular/core';
import {CliniciansService} from '../clinicians.service';
import {PatientsService} from '../patients.service';
import {ConditionsService} from '../conditions.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(){}

  ngOnInit(){}

}
