import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bob';
  typeExample = 26;
  subHeading21Title = 'Hobies';
  subHeading22Title = 'About me';

  displayContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rem odio enim quae modi, possimus impedit
  ratione quisquam vel reprehenderit perferendis eaque architecto earum omnis? Accusantium quisquam molestias
  eveniet dolore.`;

  hobArray = ['Dancing', 'Running', 'Watching TV'];

  isEating = false;

  onClick(val: boolean): void {
    this.isEating = val;
  }
}
