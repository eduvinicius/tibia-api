import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildMemberCardComponent } from './guild-member-card.component';

describe('GuildMemberCardComponent', () => {
  let component: GuildMemberCardComponent;
  let fixture: ComponentFixture<GuildMemberCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuildMemberCardComponent]
    });
    fixture = TestBed.createComponent(GuildMemberCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
