import { Component, OnInit } from '@angular/core';
import {Condition} from '../condition';
import {ConditionsService} from '../conditions.service';

@Component({
  selector: 'app-conditions-list',
  templateUrl: './conditions-list.component.html',
  styleUrls: ['./conditions-list.component.css']
})
export class ConditionsListComponent implements OnInit {
  conditions: Array<Condition> =[];

  constructor(private conditionsService: ConditionsService) { }

  ngOnInit() {
    this.getConditions();
  }

  getConditions(){
    this.conditionsService.getConditions$()
      .subscribe(conditions => this.conditions = conditions);
  }

  removeCondition(conditionId: number){
    this.conditionsService.removeCondition(conditionId).subscribe(
      () => {
        this.conditionsService.getConditionsFromDB()
      });
  }

}
