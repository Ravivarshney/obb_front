import { TestBed } from '@angular/core/testing';

import { ObbService } from './obb.service';

describe('ObbService', () => {
  let service: ObbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
