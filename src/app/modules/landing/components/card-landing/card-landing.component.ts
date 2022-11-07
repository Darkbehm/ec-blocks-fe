import { Component, Input, OnInit } from '@angular/core';
import { faClone } from '@fortawesome/free-solid-svg-icons';
import Feature from '../../models/feature.model';

@Component({
  selector: 'app-card-landing',
  templateUrl: './card-landing.component.html',
  styleUrls: ['./card-landing.component.scss'],
})
export class CardLandingComponent implements OnInit {
  @Input() feature: Feature = {
    title: 'Feature 1',
    description: 'Description 1',
    icon: faClone,
    link: 'link1',
  };

  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
}
