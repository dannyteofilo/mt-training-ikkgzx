import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Farm } from './farm';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _jsonURL = '../../assets/mock-data.json';

  constructor(private httpService: HttpClient) {}

  public getFarms(): Observable<Farm> {
    return this.httpService.get<Farm>(this._jsonURL);
  }
}
