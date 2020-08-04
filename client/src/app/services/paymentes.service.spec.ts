import { TestBed } from '@angular/core/testing';

import { PaymentesService } from './paymentes.service';

describe('PaymentesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaymentesService = TestBed.get(PaymentesService);
    expect(service).toBeTruthy();
  });
});
