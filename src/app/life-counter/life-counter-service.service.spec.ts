import { TestBed } from '@angular/core/testing';

import { LifeCounterServiceService } from './life-counter-service.service';

describe('LifeCounterServiceService', () => {
  let service: LifeCounterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LifeCounterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
