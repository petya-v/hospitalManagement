import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CliniciansService} from '../../../clinicians.service';
import {Clinician} from '../../../clinician';
import {debug} from 'util';

@Component({
  selector: 'app-add-specialty',
  templateUrl: './add-specialty.component.html',
  styleUrls: ['./add-specialty.component.css']
})
export class AddSpecialtyComponent implements OnInit {
  @Input() clinicianId: number;
  @Output() newSpecialityAdded = new EventEmitter();

  constructor(private cliniciansService: CliniciansService) { }

  ngOnInit() {
  }

  addSpecialty(specialityId: number){
    this.cliniciansService.addClinicianSpeciality(this.clinicianId,specialityId)
      .subscribe(() => {
        this.newSpecialityAdded.emit(specialityId);
      });
  }
}
