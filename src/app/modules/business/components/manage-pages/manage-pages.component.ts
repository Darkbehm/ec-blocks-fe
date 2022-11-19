import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Page } from 'src/app/core/interfaces';
import { EditBlockComponent } from '../edit-block/edit-block.component';

@Component({
  selector: 'app-manage-pages',
  templateUrl: './manage-pages.component.html',
  styleUrls: ['./manage-pages.component.scss'],
})
export class ManagePagesComponent implements OnChanges {
  @Input() page!: Page;
  @Input() addState: boolean = false;
  ngOnChanges(changes: SimpleChanges) {
    if (changes['addState'].currentValue) {
      this.pageForm.reset();
      // this.page = {
      //   name: '',
      //   blocks: []
      // }
    }

    delete changes['page'].currentValue.id;

    this.pageForm.setValue(changes['page'].currentValue);
  }

  pageForm: FormGroup = this.fb.group({
    name: [''],
    blocks: [{}],
  });
  constructor(private fb: FormBuilder, private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(EditBlockComponent, {
      panelClass: 'custom-dialog-container',
      width: '850px',
    });
  }

  columns: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  rows: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];
}
