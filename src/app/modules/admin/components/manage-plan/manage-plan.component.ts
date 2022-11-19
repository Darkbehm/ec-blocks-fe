import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Plan } from 'src/app/core/interfaces';

@Component({
  selector: 'app-manage-plan',
  templateUrl: './manage-plan.component.html',
  styleUrls: ['./manage-plan.component.scss'],
})
export class ManagePlanComponent implements OnInit {
  isDefaultRoute: boolean = false;
  addMode: boolean = false;

  plan: Plan = {
    name: '',
    description: '',
    price: 0,
    priceMessage: '',
    features: [],
  };

  constructor(private fb: FormBuilder, private router: Router) {}

  @Input() plans: Plan[] = [];

  async ngOnInit(): Promise<void> {
    await this.verifyRoute();
  }

  async verifyRoute() {
    if (this.plan.id) {
      console.log('edit navigation');
      await this.router.navigate(['admin/plans/edit', this.plan.id]);
    } else if (!this.plan.id && !this.addMode) {
      console.log('Default navigation');
      // await this.router.navigate(['admin/plans']);
    } else if (this.addMode) {
      console.log('Create Navigation');
      await this.router.navigate(['admin/plans/create']);
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

  planForm: FormGroup = this.fb.group({
    name: [''],
    description: [''],
    price: [0],
    priceMessage: [''],
    features: [[]],
  });

  async getOptionSelected({ id, ...rest }: any) {
    this.addMode = false;
    this.plan = { id, ...rest };
    this.planForm.setValue({
      ...rest,
    });
    await this.verifyRoute();
  }

  async getAddState(value: boolean) {
    this.addMode = value;
    await this.verifyRoute();
    this.plan = {
      name: '',
      description: '',
      price: 0,
      priceMessage: '',
      features: [],
    };

    this.planForm.reset();
  }

  save() {
    console.log(this.planForm);
  }
}
