export interface Plan {
  id?: string;
  name: string;
  description: string;
  price: number;
  priceMessage: string;
  features: Feature[];
}

export interface Feature {
  id?: string;
  name: string;
  isActive: boolean;
}
