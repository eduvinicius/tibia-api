import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ISideBarItens } from './sidebar.interface';
import { SIDE_BAR_ITENS } from './sidebar-itens.const';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive]
})
export class SidebarMenuComponent {

  sideBarItens = signal<ISideBarItens[]>(SIDE_BAR_ITENS);

  constructor() { }

}
