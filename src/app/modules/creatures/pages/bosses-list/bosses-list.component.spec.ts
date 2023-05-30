import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BossesListComponent } from './bosses-list.component';

describe('BossesListComponent', () => {
  let component: BossesListComponent;
  let fixture: ComponentFixture<BossesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BossesListComponent]
    });
    fixture = TestBed.createComponent(BossesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
