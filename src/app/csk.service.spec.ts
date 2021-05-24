import { TestBed } from '@angular/core/testing';

import { CskService } from './csk.service';

describe('CskService', () => {
  let service: CskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
