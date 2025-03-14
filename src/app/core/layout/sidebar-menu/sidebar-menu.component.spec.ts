/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { SidebarMenuComponent } from './sidebar-menu.component';
import { ISideBarItens } from './sidebar.interface';

describe('SidebarMenuComponent', () => {
  let component: SidebarMenuComponent;
  let fixture: ComponentFixture<SidebarMenuComponent>;

  const expectedSideBar: ISideBarItens[] = [
    {
      title: 'Início',
      icon: '',
      route: '/inicio'
    },
    {
      title: 'Criaturas',
      icon: '',
      route: '/criaturas'
    },
    {
      title: 'Personagens',
      icon: '',
      route: '/personagens'
    },
    {
      title: 'Guildas',
      icon: '',
      route: '/guildas'
    },
    {
      title: 'Mundos',
      icon: '',
      route: '/mundos'
    },
    {
      title: 'Sobre',
      icon: '',
      route: '/sobre'
    },
  ];

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
    expect(menuItems.length).toBe(expectedSideBar.length);
  });

  it('should display the correct titles for menu items', () => {
    const menuItems: DebugElement[] = fixture.debugElement.queryAll(By.css('nav ul li a'));

    menuItems.forEach((item, index) => {
      expect(item.nativeElement.textContent.trim()).toBe(expectedSideBar[index].title);
    });
  });

  it('should have correct router links', () => {
    const links: DebugElement[] = fixture.debugElement.queryAll(By.css('nav ul li a'));

    links.forEach((link, index) => {
      expect(link.nativeElement.getAttribute('ng-reflect-router-link')).toBe(expectedSideBar[index].route);
    });
  });

});
