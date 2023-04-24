import { TestBed } from '@angular/core/testing';

import { GteValidatorService } from './gte-validator.service';

describe('GteValidatorService', () => {
  let service: GteValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GteValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
