/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DateService } from './Date.service';

describe('Service: Date', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateService]
    });
  });

  it('should ...', inject([DateService], (service: DateService) => {
    expect(service).toBeTruthy();
  }));
});
