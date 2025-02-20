import { Component } from '@angular/core';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [FooterComponent, HeaderComponent, RouterModule]
})
export class AppComponent {
  title = 'tibia-api';
}
