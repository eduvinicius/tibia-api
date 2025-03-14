import { Component, input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tibia-input-text',
  templateUrl: './tibia-input-text.component.html',
  styleUrls: ['./tibia-input-text.component.css'],
  imports: [FormsModule, ReactiveFormsModule],
  standalone: true
})
export class TibiaInputTextComponent {

  formControl = input<FormControl>(new FormControl(''));
  type = input<string>('text');
  placeholder = input<string>('');
  label = input<string>('');
  id = input<string>('');
  name = input <string>('');

  constructor() { }

}
