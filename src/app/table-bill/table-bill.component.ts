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

  // End Point: https://ufixibreak.herokuapp.com/bill/all
  constructor(private _service: DataService) { }

  ngOnInit() {
    this._service.getAllBill().subscribe(
      (res) => {
        this.billArray = res['data'];
        console.log(res['data']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
