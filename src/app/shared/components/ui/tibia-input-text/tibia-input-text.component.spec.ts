/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TibiaInputTextComponent } from './tibia-input-text.component';

describe('TibiaInputTextComponent', () => {
  let component: TibiaInputTextComponent;
  let fixture: ComponentFixture<TibiaInputTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TibiaInputTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TibiaInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
