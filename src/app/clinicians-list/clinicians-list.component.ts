import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Clinician} from '../clinician';
import {CliniciansService} from '../clinicians.service';

@Component({
  selector: 'app-clinicians-list',
  templateUrl: './clinicians-list.component.html',
  styleUrls: ['./clinicians-list.component.css']
})
export class CliniciansListComponent implements OnInit, OnChanges {
  clinicians: Array<Clinician> = [];

  constructor(private cliniciansService: CliniciansService) { }

  ngOnInit() {
    this.getClinicians();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getClinicians()
  }

  getClinicians(){
    this.cliniciansService.getClinicians$()
      .subscribe(clinicians => {
        this.clinicians = clinicians;
      });
  }
}
