import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Template } from 'src/app/core/interfaces';

@Component({
  selector: 'app-manage-template',
  templateUrl: './manage-template.component.html',
  styleUrls: ['./manage-template.component.scss'],
})
export class ManageTemplateComponent implements OnInit {
  isDefaultRoute: boolean = false;
  addMode: boolean = false;
  panelOpenState: boolean = false;

  @Input() templates: Template[] = [];

  template: Template = {
    name: '',
    description: '',
  };

  jsCode: string = ``;
  cssCode: string = ``;

  constructor(private fb: FormBuilder, private router: Router) {}

  async ngOnInit(): Promise<void> {
    await this.verifyRoute();
  }

  async verifyRoute() {
    if (this.template.id) {
      console.log('edit navigation');
      await this.router.navigate(['admin/templates/edit', this.template.id]);
    } else if (!this.template.id && !this.addMode) {
      console.log('Default navigation');
      // await this.router.navigate(['admin/plans']);
    } else if (this.addMode) {
      console.log('Create Navigation');
      await this.router.navigate(['admin/templates/create']);
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

  templateForm: FormGroup = this.fb.group({
    name: [''],
    description: [''],
  });

  async getOptionSelected({ id, cssCode, jsCode, ...rest }: any) {
    this.addMode = false;

    this.template = { id, ...rest };

    this.cssCode = cssCode || '';
    this.jsCode = jsCode || '';
    console.log('codigos: ', this.cssCode, this.jsCode);

    this.templateForm.setValue({
      ...rest,
    });
    await this.verifyRoute();
  }

  async getAddState(value: boolean) {
    this.addMode = value;
    await this.verifyRoute();
    this.template = {
      name: '',
      description: '',
    };

    this.templateForm.reset();
  }

  save() {}

  getJSCode(code: string) {
    console.log(code);
  }

  getCSSCode(code: string) {
    console.log(code);
  }
}
