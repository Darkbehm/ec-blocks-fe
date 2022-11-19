import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface FeatureCard {
  title: string;
  description: string;
  //fontawesome icon name
  icon: IconProp;
  link: string;
}
