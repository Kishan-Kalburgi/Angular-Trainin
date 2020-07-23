import { Component, OnInit } from '@angular/core';

import { DataService } from '../service/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  countryList: any[];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getCountryNames().subscribe((data) => {
      console.log(data);
      this.countryList = data['result'];
      console.log('Contry List', this.countryList);
    });
  }

}
