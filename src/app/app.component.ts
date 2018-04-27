import { Component } from '@angular/core';
import {PatientsService} from './patients.service';
import {CliniciansService} from './clinicians.service';
import {ConditionsService} from './conditions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private cliniciansService: CliniciansService, private patientsService: PatientsService, private conditionsService: ConditionsService) { }

  ngOnInit() {
    this.cliniciansService.getCliniciansFromDB();
    this.patientsService.getPatientsFromDB();
    this.conditionsService.getConditionsFromDB()
  }
}
