import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    standalone: false
})
export class ButtonComponent {

  @Input() btnTitle: string = '';

}
