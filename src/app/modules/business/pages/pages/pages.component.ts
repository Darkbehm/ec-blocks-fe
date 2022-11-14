import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Page } from '../../interfaces/page.interface';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  isDefaultRoute: boolean = false;
  addMode: boolean = false;

  page: Page = {
    name: '',
    blocks: [],
  };

  constructor(private router: Router) {}

  async ngOnInit(): Promise<void> {
    await this.verifyRoute();
  }

  async verifyRoute() {
    if (this.page.id) {
      console.log('edit navigation');
      await this.router.navigate(['business/pages/edit', this.page.id]);
    } else if (!this.page.id && !this.addMode) {
      console.log('Default navigation');
      // await this.router.navigate(['admin/plans']);
    } else if (this.addMode) {
      console.log('Create Navigation');
      await this.router.navigate(['business/pages/create']);
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
    console.log(rest);
    this.page = { id, ...rest };
    await this.verifyRoute();
  }

  async getAddState(value: boolean) {
    this.addMode = value;

    await this.verifyRoute();
    this.page = {
      name: '',
      blocks: [],
    };
  }

  save() {}

  pages: Page[] = [
    {
      id: 'dgwag',
      name: 'Home',
      blocks: [
        {
          name: 'Header',
          color: '#eeeee',
        },
        {
          name: 'Left Panel',
          color: '#eef321',
        },
        {
          name: 'Right Panel',
          color: '#111111',
        },
        {
          name: 'Product Galery',
          color: 'green',
        },
        {
          name: 'Footer',
          color: 'blue',
        },
      ],
    },
  ];
}
