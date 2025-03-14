import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatureDetailsComponent } from './creature-details.component';

describe('CreatureDetailsComponent', () => {
  let component: CreatureDetailsComponent;
  let fixture: ComponentFixture<CreatureDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatureDetailsComponent]
    });
    fixture = TestBed.createComponent(CreatureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
