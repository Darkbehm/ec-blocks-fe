import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader-circle',
  templateUrl: './loader-circle.component.html',
  styleUrls: ['./loader-circle.component.scss'],
})
export class LoaderCircleComponent implements OnInit {
  constructor() {}
  class = 'wrapper';
  @Input() wrapped: boolean;

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    if (this.wrapped === false) {
      this.class = 'normal';
    }
  }
}
