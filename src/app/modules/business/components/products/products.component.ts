import { Component } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  isDefaultRoute: boolean = false;
  addMode: boolean = false;

  product: Product = {
    name: '',
    description: '',
    category: {
      name: '',
    },
    price: 0,
  };

  productForm: FormGroup = this.fb.group({
    name: [''],
    description: [''],
    category: [{ name: '' }],
    price: [0],
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  async ngOnInit(): Promise<void> {
    await this.verifyRoute();
  }

  async verifyRoute() {
    if (this.product.id) {
      console.log('edit navigation');
      await this.router.navigate([
        'business/products-categories/products/edit',
        this.product.id,
      ]);
    } else if (!this.product.id && !this.addMode) {
      console.log('Default navigation');
      // await this.router.navigate(['admin/plans']);
    } else if (this.addMode) {
      console.log('Create Navigation');
      await this.router.navigate([
        'business/products-categories/products/create',
      ]);
    }

    if (this.router.url.includes('create')) {
      console.log('create');
      this.isDefaultRoute = false;
      console.log(this.isDefaultRoute);
    } else if (this.router.url.includes('edit')) {
      console.log('edit');
      this.isDefaultRoute = false;
      console.log(this.isDefaultRoute);
    } else {
      console.log('default');
      this.isDefaultRoute = true;
      console.log(this.isDefaultRoute);
    }
  }

  async getOptionSelected({ id, ...rest }: any) {
    this.addMode = false;
    this.product = { id, ...rest };
    this.productForm.setValue({
      ...rest,
    });
    await this.verifyRoute();
  }

  async getAddState(value: boolean) {
    this.addMode = value;
    await this.verifyRoute();
    this.product = {
      name: '',
      description: '',
      price: 0,
      category: { name: '' },
    };

    this.productForm.reset();
  }

  save() {
    console.log(this.productForm);
  }

  products: Product[] = [
    {
      id: 'bdabwduib',
      name: 'product x',
      description: 'dbjwajkd dggwialm0j',
      price: 9.99,
      category: {
        id: 'bjpoj',
        name: 'category x',
      },
    },
    {
      id: 'bdabwduibq',
      name: 'product y',
      description: 'dbjwajkd dggwialm0j',
      price: 12.99,
      category: {
        id: 'bjdhj',
        name: 'category y',
      },
    },
    {
      id: 'bdabw buiou',
      name: 'product z',
      description: 'dbjwajkdwa bjkbj',
      price: 16.99,
      category: {
        id: 'bjdhj',
        name: 'category z',
      },
    },
  ];

  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
}
