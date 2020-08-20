import { Component, OnInit } from '@angular/core';

import { DataService } from '../service/data.service';
import { BillType } from '../modals/bill.modal';

@Component({
  selector: 'app-table-bill',
  templateUrl: './table-bill.component.html',
  styleUrls: ['./table-bill.component.css']
})
export class TableBillComponent implements OnInit {

  billArray: BillType[];
  backBillArray: BillType[];

  // End Point: https://ufixibreak.herokuapp.com/bill/all
  constructor(private _service: DataService) { }

  ngOnInit() {
    this._service.getAllBill().subscribe(
      (res) => {
        this.billArray = res['data'];
        this.backBillArray = res['data'];
        console.log(res['data']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  applyFilter(event, propertyType) {
    console.log(event);
    this.billArray = this.backBillArray.filter(e => {
      if (event === '') {
        return true;
      } else {
        if (typeof e[propertyType] === 'number') {
          return e[propertyType].toString().includes(event);
        } else {
          return e[propertyType].toLocaleLowerCase().includes(event.toLocaleLowerCase());
        }
      }
    });
  }

  applyBtnFilter(filterType: string) {
    console.log(filterType);
    this.billArray = this.backBillArray.filter(e => {
      if (filterType === '' || e.status === filterType) {
        return true;
      } else {
        return false;
      }
    });
  }
}
