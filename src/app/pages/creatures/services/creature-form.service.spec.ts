/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { CreatureFormService } from './creature-form.service';

describe('Service: CreatureForm', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreatureFormService]
    });
  });

  it('should ...', inject([CreatureFormService], (service: CreatureFormService) => {
    expect(service).toBeTruthy();
  }));
});
