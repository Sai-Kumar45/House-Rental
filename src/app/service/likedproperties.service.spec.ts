import { TestBed } from '@angular/core/testing';

import { LikedpropertiesService } from './likedproperties.service';

describe('LikedpropertiesService', () => {
  let service: LikedpropertiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikedpropertiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
