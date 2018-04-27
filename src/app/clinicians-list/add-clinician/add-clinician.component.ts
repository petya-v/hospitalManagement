import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CliniciansService} from '../../clinicians.service';
import {Clinician} from '../../clinician';

@Component({
  selector: 'app-add-clinician',
  templateUrl: './add-clinician.component.html',
  styleUrls: ['./add-clinician.component.css']
})
export class AddClinicianComponent implements OnInit {
  @Output() clinicianAdded = new EventEmitter<Clinician>();

  constructor(private cliniciansService: CliniciansService) { }

  ngOnInit() {
  }

  addClinician(name: string, surname: string){
    this.cliniciansService.addClinician(name, surname).subscribe(
      newClinician => {
        let clinician = new Clinician(newClinician.id, newClinician.name,
          newClinician.surname, newClinician.specialities);
        this.cliniciansService.getCliniciansFromDB();
      }
    );
  }
}
