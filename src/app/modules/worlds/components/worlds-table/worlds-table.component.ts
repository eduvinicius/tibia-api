import { Component, input} from '@angular/core';
import { IRegularWorlds } from '../../interfaces/IWorlds';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-worlds-table',
    templateUrl: './worlds-table.component.html',
    styleUrls: ['./worlds-table.component.css'],
    standalone: true,
    imports: [ LoaderComponent, RouterLink, CommonModule]
})
export class WorldsTableComponent {

  worlds = input<IRegularWorlds[]>([]);
  isLoading = input<boolean>(false);

}
