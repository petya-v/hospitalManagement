import {Component, Input, OnInit} from '@angular/core';
import {PatientsService} from '../../../patients.service';
import {ConditionsService} from '../../../conditions.service';
import {Condition} from '../../../condition';
import {Patient} from '../../../patient';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent {
  @Input() patientId: number;

  constructor(private patientsService: PatientsService, private conditionsService: ConditionsService) {
  }

  getPatientConditions$(): Observable<Condition[]> {
    return this.patientsService.getPatientById(this.patientId)
      .switchMap(patient => {
        let conditionsObs = patient.conditions
          .map(conditionId => this.conditionsService.getConditionById(conditionId));
        return Observable.combineLatest(conditionsObs);
      });
  }
}
