import { Component } from '@angular/core';
import { DataService } from './data.service';
import { SelectedFarmService } from './selected-farm.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Farm } from './farm';

@Component({
  selector: 'mt-sample-list',
  templateUrl: './mt-sample-list-index.component.html',
  styleUrls: ['./mt-sample-list-index.component.css'],
})
export class MtSampleListIndexComponent {
  farms: Farm;
  error:string;

  constructor(
    private farmsService: SelectedFarmService,
    private dataService: DataService
  ) {
    this.fetchData();
  }

  public fetchData() {
    this.dataService.getFarms().subscribe(
      (res) => {
        this.farms = res;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  public handleSelect(farm: Farm) {
    this.farmsService.setFarm(farm);
  }

  public handleFilterChoose(opt: string) {
    this.farms =
      opt === '1'
        ? this.fetchData()
        : opt === '2'
        ? this.applyFilter('FarmNo', '100')
        : this.applyFilter('ActiveDate', '2020');
  }
  public applyFilter(searchBy, value) {
    const aux: any = this.farms;
    const filterFarms = aux.filter((item) => {
      return (
        item[`${searchBy}`].toLowerCase().indexOf(value.toLowerCase()) > -1
      );
    });
    return filterFarms;
  }

  public handleError(){
    this.dataService.getException().subscribe(res=>{
      console.log(res);
    },err=>{
      console.error('Error: ',err)
      this.error=err.message;      
    })
  }
}
