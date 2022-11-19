import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Store } from 'src/app/core/interfaces';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
})
export class ConfigurationComponent {
  jsCode: string = ``;
  cssCode: string = ``;
  panelOpenState: boolean = false;
  Store: any = {
    name: '',
    description: '',
  };

  configurationForm: FormGroup = this.fb.group({
    name: [''],
    description: [''],
  });

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  keywords: string[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.keywords.push(value);
    }
    event.chipInput!.clear();
  }

  remove(keyword: string): void {
    const index = this.keywords.indexOf(keyword);

    if (index >= 0) {
      this.keywords.splice(index, 1);
    }
  }

  constructor(private fb: FormBuilder) {}

  getCSSCode(code: string) {
    console.log(code);
  }

  getJSCode(code: string) {
    console.log(code);
  }
}
