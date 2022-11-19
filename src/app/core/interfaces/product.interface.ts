import { Category } from './category.interface';

export interface Product {
  id?: string;
  name: string;
  description: string;
  price: number;
  images?: any[];
  category: Category;
}
