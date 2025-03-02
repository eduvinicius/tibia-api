/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CharacterFormService } from './character-form.service';

describe('Service: CharacterForm', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacterFormService]
    });
  });

  it('should ...', inject([CharacterFormService], (service: CharacterFormService) => {
    expect(service).toBeTruthy();
  }));
});
