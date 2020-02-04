import { TestBed } from '@angular/core/testing';

import { CorreiosRestService } from './correios-rest.service';

describe('CorreiosRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CorreiosRestService = TestBed.get(CorreiosRestService);
    expect(service).toBeTruthy();
  });
});
