import { TestBed } from '@angular/core/testing';

import { DeclariService } from './declari.service';

describe('DeclariService', () => {
  let service: DeclariService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeclariService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
