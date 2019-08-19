/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CheckItemService } from './checkItem.service';

describe('Service: CheckItem', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckItemService]
    });
  });

  it('should ...', inject([CheckItemService], (service: CheckItemService) => {
    expect(service).toBeTruthy();
  }));
});
