import { Component, OnInit } from '@angular/core';

import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  countryList: any[];

  constructor(private _dataService: DataService, private _router: Router) { }

  ngOnInit() {
    console.log('Before Subscribe');
    this._dataService.getCountryNames().subscribe(
      (data) => {
      console.log(data['result']);
      this.countryList = data['result'];
      this.countryList.sort(this.compare);
    });
  }

  compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const bandA = a.name.toUpperCase();
    const bandB = b.name.toUpperCase();

    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  }

  onRowClick(item) {
    console.log(item);
    this._router.navigate(['/more'], { queryParams : item});
  }

}
