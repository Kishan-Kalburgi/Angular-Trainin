import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BillType } from '../modals/bill.modal';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.css']
})
export class AddBillComponent implements OnInit {

  error = '';
  bill: BillType = {
    customerName: '',
    deliveryDate: '',
    orderDate: '',
    phoneNumber: null,
    status: '',
  };
  constructor(private _service: DataService, private _router: Router) { }

  ngOnInit() {
  }

  onFormSubmit(addBillForm: NgForm) {
    if (addBillForm.valid) {
      this.error = '';
      console.log(addBillForm.value);
      this._service.addBill(addBillForm.value).subscribe(
        (res) => {
          console.log(res);
          this._router.navigate(['/allbill']);
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.error = 'Please Enter all Details';
    }
  }

}
