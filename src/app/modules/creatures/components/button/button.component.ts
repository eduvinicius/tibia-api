import { Component, input } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css'],
    standalone: true
})
export class ButtonComponent {
  btnTitle = input<string>('');

}
