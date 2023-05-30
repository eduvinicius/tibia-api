import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildCardComponent } from './guild-card.component';

describe('GuildCardComponent', () => {
  let component: GuildCardComponent;
  let fixture: ComponentFixture<GuildCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuildCardComponent]
    });
    fixture = TestBed.createComponent(GuildCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
