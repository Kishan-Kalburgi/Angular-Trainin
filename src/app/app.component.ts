import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formApp';
  toggle = true;
  inputValue = '';
  inputValue2 = '';

  currentDate = new Date();
  upperCase = 'abce';
  currency = 52.43;

  onClick(event) {
    this.toggle = !this.toggle;
    console.log(event);
  }

  onSubmit() {
    console.log(this.inputValue + ' ' + this.inputValue2);
  }

  onLogin(val) {
    this.toggle = val;
  }
 }
