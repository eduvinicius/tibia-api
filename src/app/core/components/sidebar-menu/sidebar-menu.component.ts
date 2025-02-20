import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ISideBarItens } from './sidebar.interface';
import { SIDE_BAR_ITENS } from './sidebar-itens.const';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class SidebarMenuComponent implements OnInit {

  sideBarItens = signal<ISideBarItens[]>(SIDE_BAR_ITENS);

  constructor() { }

  ngOnInit() {
  }

}
