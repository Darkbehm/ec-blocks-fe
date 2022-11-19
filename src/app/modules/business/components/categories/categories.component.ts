import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/core/interfaces';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  isDefaultRoute: boolean = false;
  addMode: boolean = false;

  category: Category = {
    name: '',
  };

  categoryForm: FormGroup = this.fb.group({
    name: [''],
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  async ngOnInit(): Promise<void> {
    await this.verifyRoute();
  }

  async verifyRoute() {
    if (this.category.id) {
      console.log('edit navigation');
      await this.router.navigate([
        'business/products-categories/categories/edit',
        this.category.id,
      ]);
    } else if (!this.category.id && !this.addMode) {
      console.log('Default navigation');
      // await this.router.navigate(['admin/plans']);
    } else if (this.addMode) {
      console.log('Create Navigation');
      await this.router.navigate([
        'business/products-categories/categories/create',
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
    this.category = { id, ...rest };
    this.categoryForm.setValue({
      ...rest,
    });
    await this.verifyRoute();
  }

  async getAddState(value: boolean) {
    this.addMode = value;
    await this.verifyRoute();
    this.category = {
      name: '',
    };

    this.categoryForm.reset();
  }

  categories: Category[] = [
    {
      id: 'dbjkwabdjkwa',
      name: 'bdjkwabdjkbwa',
    },
    {
      id: 'dbjkwabdwa',
      name: 'bdjkwabdjkbwa',
    },
    {
      id: 'dvbwuig',
      name: 'feuigef',
    },
  ];
}
