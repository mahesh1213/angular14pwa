import { TestBed } from '@angular/core/testing';

import { GtevalidationService } from './gtevalidation.service';

describe('GtevalidationService', () => {
  let service: GtevalidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GtevalidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
