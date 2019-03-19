import { TestBed } from '@angular/core/testing';

import { NsiaServicesService } from './nsia-services.service';

describe('NsiaServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NsiaServicesService = TestBed.get(NsiaServicesService);
    expect(service).toBeTruthy();
  });
});
