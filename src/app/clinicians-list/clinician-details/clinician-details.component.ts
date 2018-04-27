import { Component, OnInit } from '@angular/core';
import {Clinician} from '../../clinician';
import {CliniciansService} from '../../clinicians.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-clinician-details',
  templateUrl: './clinician-details.component.html',
  styleUrls: ['./clinician-details.component.css']
})
export class ClinicianDetailsComponent implements OnInit {
  clinicianId: number;
  clinician: Clinician;
  specialityAdded : any;

  constructor(private cliniciansService: CliniciansService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.clinicianId = + params['clinicianId'];
    });
    this.getClinician();
  }

  getClinician(){
    this.cliniciansService.getClinicianById(this.clinicianId)
      .subscribe(clinician => this.clinician = clinician);
  }

  updateSpecialities(newSpeciality : any){
    this.specialityAdded = newSpeciality;
  }

}
