import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildSearchFormComponent } from './guild-search-form.component';

describe('GuildSearchFormComponent', () => {
  let component: GuildSearchFormComponent;
  let fixture: ComponentFixture<GuildSearchFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuildSearchFormComponent]
    });
    fixture = TestBed.createComponent(GuildSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
