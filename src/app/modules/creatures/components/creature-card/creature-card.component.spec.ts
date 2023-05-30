import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatureCardComponent } from './creature-card.component';

describe('CreatureCardComponent', () => {
  let component: CreatureCardComponent;
  let fixture: ComponentFixture<CreatureCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatureCardComponent]
    });
    fixture = TestBed.createComponent(CreatureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
