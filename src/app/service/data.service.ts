import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BillType } from '../modals/bill.modal';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  getCountryNames() {
    console.log('Api CALL');
    return this._http.get('https://run.mocky.io/v3/0783fd82-1d57-4df7-821b-65488fcd223e');
  }

  getAllBill() {
    return this._http.get('https://ufixibreak.herokuapp.com/bill/all');
  }

  addBill(bill: BillType) {
    return this._http.post('https://ufixibreak.herokuapp.com/bill/add', bill);
  }
}
