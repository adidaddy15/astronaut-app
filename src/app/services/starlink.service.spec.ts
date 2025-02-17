import { TestBed } from '@angular/core/testing';

import { StarlinkService } from './starlink.service';

describe('StarlinkService', () => {
  let service: StarlinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarlinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
