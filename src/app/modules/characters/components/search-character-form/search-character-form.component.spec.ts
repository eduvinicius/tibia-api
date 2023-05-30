import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCharacterFormComponent } from './search-character-form.component';

describe('SearchCharacterFormComponent', () => {
  let component: SearchCharacterFormComponent;
  let fixture: ComponentFixture<SearchCharacterFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchCharacterFormComponent]
    });
    fixture = TestBed.createComponent(SearchCharacterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
