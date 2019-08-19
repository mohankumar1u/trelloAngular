/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CardDetailsService } from './cardDetails.service';

describe('Service: CardDetails', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardDetailsService]
    });
  });

  it('should ...', inject([CardDetailsService], (service: CardDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
