import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClinicianComponent } from './add-clinician.component';

describe('AddClinicianComponent', () => {
  let component: AddClinicianComponent;
  let fixture: ComponentFixture<AddClinicianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClinicianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClinicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
