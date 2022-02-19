import { EventEmitter, Injectable, Output } from '@angular/core';
import { Farm } from './farm';

@Injectable({
  providedIn: 'root',
})
export class SelectedFarmService {
  private selected: Farm;

  @Output() change: EventEmitter<Farm> = new EventEmitter();

  constructor() {}

  public setFarm(farm: Farm) {
    this.selected = farm;
    this.change.emit(this.selected);
  }
}
