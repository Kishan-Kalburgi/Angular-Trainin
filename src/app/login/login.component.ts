import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModal } from '../modals/user.modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onLogin = new EventEmitter<boolean>();

  user: UserModal = {
    userId: '',
    pwd: null
  };

  isError = false;
  isError2 = true;

  constructor() {
  }

  ngOnInit() {
  }

  onFormSubmit(loginForm: NgForm) {
    if (loginForm.valid) {
      this.isError2 = this.login(loginForm.value);
      this.isError = false;
    } else {
      this.isError = true;
    }
  }

  login(userData: UserModal): boolean {
    if (userData.userId === 'admin' && userData.pwd === 'admin') {
      this.onLogin.emit(false);
      return true;
    } else {
      this.onLogin.emit(true);
      return false;
    }
  }
}
