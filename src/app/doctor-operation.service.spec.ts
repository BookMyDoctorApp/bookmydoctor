import { TestBed } from '@angular/core/testing';

import { DoctorOperationService } from './doctor-operation.service';

describe('DoctorOperationService', () => {
  let service: DoctorOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
