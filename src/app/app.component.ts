import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formApp';
  toggle = false;
  inputValue = '';
  inputValue2 = '';

  onClick(event) {
    this.toggle = !this.toggle;
    console.log(event);
  }

  onSubmit() {
    console.log(this.inputValue + ' ' + this.inputValue2);
  }
}
