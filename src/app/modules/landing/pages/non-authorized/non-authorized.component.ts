import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-non-authorized',
  templateUrl: './non-authorized.component.html',
  styleUrls: ['./non-authorized.component.scss'],
})
export class NonAuthorizedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
