import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SelectedFarmService } from './selected-farm.service';
import { takeUntil } from 'rxjs/operators';
import { Farm } from './farm';
import {
  EditService,
  ToolbarService,
  SortService,
} from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'mt-sample-detail',
  templateUrl: './mt-sample-detail.component.html',
})
export class MtSampleDetailComponent {
  farm: Farm;

  constructor(private farmService: SelectedFarmService) {
    this.farm = {
      id: 0,
      farmNo: '',
      farmName: '',
      activeDate: null,
      address: '',
    };
  }

  ngOnInit() {
    this.farmService.change.subscribe((data: Farm) => {
      this.farm = data;
    });
  }
}
