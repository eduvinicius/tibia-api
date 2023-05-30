import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatureSearchFormComponent } from './creature-search-form.component';

describe('CreatureSearchFormComponent', () => {
  let component: CreatureSearchFormComponent;
  let fixture: ComponentFixture<CreatureSearchFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatureSearchFormComponent]
    });
    fixture = TestBed.createComponent(CreatureSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
