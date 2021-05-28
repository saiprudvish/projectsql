import { TestBed } from '@angular/core/testing';

import { SzzngService } from './szzng.service';

describe('SzzngService', () => {
  let service: SzzngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SzzngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
