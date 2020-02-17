import { TestBed } from '@angular/core/testing';

import { ReserService } from './reser.service';

describe('ReserService', () => {
  let service: ReserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
