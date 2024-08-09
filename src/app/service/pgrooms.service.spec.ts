import { TestBed } from '@angular/core/testing';

import { PgroomsService } from './pgrooms.service';

describe('PgroomsService', () => {
  let service: PgroomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PgroomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
