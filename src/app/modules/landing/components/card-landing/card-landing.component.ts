import { Component, Input, OnInit } from '@angular/core';
import { faClone } from '@fortawesome/free-solid-svg-icons';
import { FeatureCard } from 'src/app/core/interfaces';

@Component({
  selector: 'app-card-landing',
  templateUrl: './card-landing.component.html',
  styleUrls: ['./card-landing.component.scss'],
})
export class CardLandingComponent implements OnInit {
  @Input() feature: FeatureCard = {
    title: 'Feature 1',
    description: 'Description 1',
    icon: faClone,
    link: 'link1',
  };

  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
}
