import { TestBed } from '@angular/core/testing';

import { AppartmentroomsService } from './appartmentrooms.service';

describe('AppartmentroomsService', () => {
  let service: AppartmentroomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppartmentroomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
