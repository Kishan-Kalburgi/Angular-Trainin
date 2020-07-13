import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sub-heading2',
  templateUrl: './sub-heading2.component.html',
  styleUrls: ['./sub-heading2.component.css']
})
export class SubHeading2Component implements OnInit {

  @Input() subHeadingContentTitle: string;
  @Input() inputArray: string[];
  @Input() displayContent: string;

  constructor() { }

  ngOnInit() {
  }

}
