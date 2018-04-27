import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Condition} from './condition';
import {Patient} from './patient';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Clinician} from './clinician';

@Injectable()
export class ConditionsService {
  private conditionsSubj : BehaviorSubject<Condition[]>;

  constructor(private http: Http) {
    this.conditionsSubj = new BehaviorSubject<Condition[]>([]);
  }

  getConditionsFromDB(){
    this.http.get('http://localhost:3000/conditions')
      .map(response => response.json()
          .map(condition => new Condition(condition.id, condition.name)))
      .subscribe(conditions => this.conditionsSubj.next(conditions));
  }

  getConditions$() : Observable<Condition[]>{
    return this.conditionsSubj.asObservable();  // conditionsSubj IS READ-ONLY
  }

  getConditionById(id: number) : Observable<Condition> {
    return this.getConditions$()
      .map(conditions => conditions.find(condition => condition.id === id));
  }

  addCondition(conditionName: string) : Observable<any> {
    return this.http.post('http://localhost:3000/conditions',
      new Condition(0,conditionName));
  }

  removeCondition(conditionId: number){
    return this.http.delete('http://localhost:3000/conditions/' + conditionId);
  }
}
