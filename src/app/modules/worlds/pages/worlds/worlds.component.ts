import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { WorldsService } from 'src/app/core/services/api/worlds.service';

import { IRegularWorlds, IWorlds } from '../../interfaces/IWorlds';

import { WorldsTableComponent } from '../../components/worlds-table/worlds-table.component';
@Component({
    selector: 'app-worlds',
    templateUrl: './worlds.component.html',
    styleUrls: ['./worlds.component.css'],
    standalone: true,
    imports: [WorldsTableComponent]
})

export class WorldsComponent implements OnInit {


  private readonly _destroyRef = inject(DestroyRef);
  public worlds = signal<IRegularWorlds[]>([]);
  public isLoading = signal<boolean>(false);

  constructor(
    private readonly worldService: WorldsService
  ) {}


  ngOnInit(): void {
    this.isLoading.set(true);
    this.worldService.getWorlds()
    .pipe(takeUntilDestroyed(this._destroyRef))
    .subscribe({
     next: (world: IWorlds) => {
        this.worlds.set(world.worlds.regular_worlds);
        this.isLoading.set(false);
      },
      error: (error) => {
        console.log(error);
        this.isLoading.set(false);
      }
    });
  };
}
