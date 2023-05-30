import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldsTableComponent } from './worlds-table.component';

describe('WorldsTableComponent', () => {
  let component: WorldsTableComponent;
  let fixture: ComponentFixture<WorldsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorldsTableComponent]
    });
    fixture = TestBed.createComponent(WorldsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
