import { TestBed } from '@angular/core/testing';

import { CharactersService } from 'src/app/shared/services/api/characters.service';

describe('CharactersService', () => {
  let service: CharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
