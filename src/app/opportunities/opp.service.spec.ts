import { TestBed } from '@angular/core/testing';

import { OppService } from './opp.service';

describe('OppServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OppService = TestBed.get(OppService);
    expect(service).toBeTruthy();
  });
});
