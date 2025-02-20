import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from './components/header/header.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'app-core',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, SidebarMenuComponent],
  templateUrl: './core.component.html',
  styleUrl: './core.component.css'
})
export class CoreComponent {

}

