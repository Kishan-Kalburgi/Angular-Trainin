import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bob';
  typeExample = 26;

  hobArray = ['Dancing', 'Running', 'Watching TV'];

  isEating = false;

  onClick(val: boolean): void {
    this.isEating = val;
  }
}
