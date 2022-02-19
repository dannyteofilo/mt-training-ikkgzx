import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Farm } from './farm';

@Injectable({
  providedIn: 'root',
})
export class SelectedFarmService {
  private _jsonURL = '../../assets/mock-data.json';
  private selected: Farm;
  @Output() change: EventEmitter<Farm> = new EventEmitter();

  constructor(private httpService: HttpClient) {}

  public getFarms(): Observable<Farm> {
    return this.httpService.get<Farm>(this._jsonURL);
  }

  public setFarm(farm: Farm) {
    this.selected = farm;
    this.change.emit(this.selected);
  }
}
