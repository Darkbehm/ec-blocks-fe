import { IconProp } from '@fortawesome/fontawesome-svg-core';

export default interface Feature {
  title: string;
  description: string;
  //fontawesome icon name
  icon: IconProp;
  link: string;
}
