/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FieldsService } from './fields.service';

describe('Service: Fields', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FieldsService]
    });
  });

  it('should ...', inject([FieldsService], (service: FieldsService) => {
    expect(service).toBeTruthy();
  }));
});
