import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinePlayersTableComponent } from './online-players-table.component';

describe('OnlinePlayersTableComponent', () => {
  let component: OnlinePlayersTableComponent;
  let fixture: ComponentFixture<OnlinePlayersTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnlinePlayersTableComponent]
    });
    fixture = TestBed.createComponent(OnlinePlayersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
