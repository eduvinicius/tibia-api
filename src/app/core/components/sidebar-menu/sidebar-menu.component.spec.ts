/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMenuComponent } from './sidebar-menu.component';
import { provideRouter } from '@angular/router';
import { SIDE_BAR_ITENS } from './sidebar-itens.const';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

fdescribe('SidebarMenuComponent', () => {
  let component: SidebarMenuComponent;
  let fixture: ComponentFixture<SidebarMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ SidebarMenuComponent ],
      providers: [
        provideRouter([])
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(SidebarMenuComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct number of menu items', () => {
    const menuItems: DebugElement[] = fixture.debugElement.queryAll(By.css('nav ul li'));
    expect(menuItems.length).toBe(SIDE_BAR_ITENS.length);
  });

  it('should display the correct titles for menu items', () => {
    const menuItems: DebugElement[] = fixture.debugElement.queryAll(By.css('nav ul li a'));

    menuItems.forEach((item, index) => {
      expect(item.nativeElement.textContent.trim()).toBe(SIDE_BAR_ITENS[index].title);
    });
  });

  it('should have correct router links', () => {
    const links: DebugElement[] = fixture.debugElement.queryAll(By.css('nav ul li a'));

    links.forEach((link, index) => {
      expect(link.nativeElement.getAttribute('ng-reflect-router-link')).toBe(SIDE_BAR_ITENS[index].route);
    });
  });

});
