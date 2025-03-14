import { Component } from '@angular/core';
import { CoreComponent } from './core/layout/core.component';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [CoreComponent]
})
export class AppComponent {
  title = 'tibia-api';
}
