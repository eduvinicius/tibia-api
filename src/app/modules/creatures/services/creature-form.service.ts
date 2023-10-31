import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, take } from 'rxjs';
import { ICreatureModel } from '../interfaces/ICreature';

@Injectable({
  providedIn: 'root'
})
export class CreatureFormService {

constructor() { }

 private _creatureData$ = new Subject<ICreatureModel>()
 public creatureData$ = this._creatureData$.asObservable();

 public notifyOnCreatureChanged(creatureData: ICreatureModel): void {
  this._creatureData$.next(creatureData);
 };

 creatureForm: FormGroup = this._createForm();

 private _createForm(): FormGroup {
  return new FormGroup({
    creatureName: new FormControl('', [Validators.required])
  })
 }

 get creatureName(): AbstractControl<string> {
  return this.creatureForm.get('creatureName')!
}
}
