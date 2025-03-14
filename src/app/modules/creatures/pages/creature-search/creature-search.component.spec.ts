import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatureSearchComponent } from './creature-search.component';

describe('CreatureSearchComponent', () => {
  let component: CreatureSearchComponent;
  let fixture: ComponentFixture<CreatureSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatureSearchComponent]
    });
    fixture = TestBed.createComponent(CreatureSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
