import { TestBed } from '@angular/core/testing';

import { WaitingsService } from './waitings.service';

describe('WaitingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WaitingsService = TestBed.get(WaitingsService);
    expect(service).toBeTruthy();
  });
});
