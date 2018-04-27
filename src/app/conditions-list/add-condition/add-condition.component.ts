import { Component, OnInit } from '@angular/core';
import {ConditionsService} from '../../conditions.service';

@Component({
  selector: 'app-add-condition',
  templateUrl: './add-condition.component.html',
  styleUrls: ['./add-condition.component.css']
})
export class AddConditionComponent implements OnInit {

  constructor(private conditionsService: ConditionsService) { }

  ngOnInit() {
  }

  addCondition(condition: string){
    this.conditionsService.addCondition(condition)
      .subscribe(condition => this.conditionsService.getConditionsFromDB());
  }

}
