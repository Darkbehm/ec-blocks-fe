import { Component, Inject } from '@angular/core';
import { faCss3Alt, faHtml5, faJs } from '@fortawesome/free-brands-svg-icons';
import { faTimes, faWrench } from '@fortawesome/free-solid-svg-icons';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-edit-block',
  templateUrl: './edit-block.component.html',
  styleUrls: ['./edit-block.component.scss'],
})
export class EditBlockComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditBlockComponent>,
  ) {}

  blockForm: FormGroup = this.fb.group({
    name: [''],
    color: [''],
    components: [''],
    jsCode: [''],
    cssCode: [''],
    htmlCode: [''],
  });
  faWrench = faWrench;
  faJS = faJs;
  faCSS = faCss3Alt;
  faHTML = faHtml5;
  faClose = faTimes;

  readComponents: string = ``;
  readJsCode: string = ``;
  readCssCode: string = ``;
  readHtmlCode: string = ``;

  components: string = ``;
  jsCode: string = ``;
  cssCode: string = ``;
  htmlCode: string = ``;

  ngOnInit(): void {
    const { name, color } = this.data.block;
    this.readComponents = this.data.block.components;
    this.readJsCode = this.data.block.jsCode;
    this.readCssCode = this.data.block.cssCode;
    this.readHtmlCode = this.data.block.htmlCode;

    this.blockForm.setValue({
      name,
      color,
      components: this.components,
      jsCode: this.jsCode,
      cssCode: this.cssCode,
      htmlCode: this.htmlCode,
    });
  }

  saveBlockChanges() {
    this.data.block.components = this.components;
    this.data.block.jsCode = this.jsCode;
    this.data.block.htmlCode = this.htmlCode;
    this.data.block.cssCode = this.cssCode;
    const { name, color } = this.blockForm.value;

    this.data.block.name = name;
    this.data.block.color = color;

    this.dialogRef.close({ data: this.data.block });
  }

  getJsonCode(jsonCode: string) {
    this.components = jsonCode;
  }

  getJsCode(jsCode: string) {
    this.jsCode = jsCode;
  }

  getCssCode(cssCode: string) {
    this.cssCode = cssCode;
  }

  getHtmlCode(htmlCode: string) {
    this.htmlCode = htmlCode;
  }
}
