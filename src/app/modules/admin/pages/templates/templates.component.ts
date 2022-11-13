import { Component } from '@angular/core';
import { Template } from '../../interfaces/template.interface';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss'],
})
export class TemplatesComponent {
  constructor() {}

  templates: Template[] = [
    {
      id: 'dbwkadbjw',
      name: 'Template 1',
      description: 'vbdhwavdhw',
      jsCode: `let x = 1;`,
    },
    {
      id: 'dnlknkadbjw',
      name: 'Template 2',
      description: 'vbdhwafbjkbjkvdhw',
    },
    {
      id: 'dnlknfwbajfbjk',
      name: 'Template 3',
      description: 'vbdhwaf vdhw fwbk',
    },
  ];
}
