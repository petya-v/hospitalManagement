import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Condition} from '../../../condition';
import {ConditionsService} from '../../../conditions.service';
import {Clinician} from '../../../clinician';
import {CliniciansService} from '../../../clinicians.service';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-specialties',
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.css']
})
export class SpecialtiesComponent implements OnInit, OnChanges, OnDestroy {
  @Input() clinicianReceived: Clinician;
  @Input() newSpecialityAdded: number;
  specialitiesIds: Array<number> = [];
  specialities: Array<Condition> = [];
  specialitiesSubscr : Subscription;

  constructor(private conditionsService: ConditionsService, private cliniciansService: CliniciansService) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.specialitiesIds = this.clinicianReceived.specialities;
    this.getConditions();
  }

  ngOnDestroy(): void {
    this.specialitiesSubscr.unsubscribe();
  }

  getConditions() {
    let specialitiesObs = this.specialitiesIds
      .map(specialityId => this.conditionsService.getConditionById(specialityId));

    this.specialitiesSubscr = Observable.combineLatest(specialitiesObs)
      .subscribe(specialities => this.specialities = specialities);
  }

  removeSpeciality(id: number){
    const updatedSpecialities = this.specialitiesIds
      .filter(specialityId => specialityId !== id);
    this.cliniciansService
      .removeClinicianSpeciality(this.clinicianReceived.id, updatedSpecialities)
      .subscribe(() => {
        this.specialitiesIds = updatedSpecialities;
        if(this.specialitiesIds.length === 0){
          this.specialities.length = 0;
        }
        this.getConditions();
      })
  }

}
