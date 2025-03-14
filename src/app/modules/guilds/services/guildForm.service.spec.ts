/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GuildFormService } from './guildForm.service';

describe('Service: GuildForm', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuildFormService]
    });
  });

  it('should ...', inject([GuildFormService], (service: GuildFormService) => {
    expect(service).toBeTruthy();
  }));
});
