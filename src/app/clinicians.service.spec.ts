import { TestBed, inject } from '@angular/core/testing';

import { CliniciansService } from './clinicians.service';

describe('CliniciansService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CliniciansService]
    });
  });

  it('should be created', inject([CliniciansService], (service: CliniciansService) => {
    expect(service).toBeTruthy();
  }));
});
