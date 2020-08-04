import { TestBed } from '@angular/core/testing';

import { ChildrenService } from './children.service';

describe('ChildrenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChildrenService = TestBed.get(ChildrenService);
    expect(service).toBeTruthy();
  });
});
