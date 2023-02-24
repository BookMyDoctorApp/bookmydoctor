import { TestBed } from '@angular/core/testing';

import { FeedbackOperationService } from './feedback-operation.service';

describe('FeedbackOperationService', () => {
  let service: FeedbackOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedbackOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
