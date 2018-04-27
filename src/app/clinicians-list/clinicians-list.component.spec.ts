import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CliniciansListComponent } from './clinicians-list.component';

describe('CliniciansListComponent', () => {
  let component: CliniciansListComponent;
  let fixture: ComponentFixture<CliniciansListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CliniciansListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CliniciansListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
