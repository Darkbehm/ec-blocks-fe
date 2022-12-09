import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Page } from 'src/app/core/interfaces';
import { EditBlockComponent } from '../edit-block/edit-block.component';
import { Block } from '../../../../core/interfaces/block.interface';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-manage-pages',
  templateUrl: './manage-pages.component.html',
  styleUrls: ['./manage-pages.component.scss'],
})
export class ManagePagesComponent implements OnChanges {
  @Input() page!: Page;
  @Input() addState: boolean = false;
  @Input() editMode: boolean = false;
  @Output() saveMode: EventEmitter<{ fg: FormGroup; id: string | undefined }> =
    new EventEmitter<{ fg: FormGroup; id: string | undefined }>();
  @Output() updateBlock: EventEmitter<Block> = new EventEmitter<Block>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['addState']?.currentValue) {
      this.pageForm.reset();
    }

    const { name, blocks } = changes['page'].currentValue;

    this.pageForm.setValue({ name, blocks });
  }

  pageForm: FormGroup = this.fb.group({
    name: [''],
    blocks: [],
  });
  constructor(private fb: FormBuilder, private dialog: MatDialog) {}

  openDialog(block: Block) {
    const dialogRef = this.dialog.open(EditBlockComponent, {
      panelClass: 'custom-dialog-container',
      width: '850px',
      data: {
        block,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result.data);
    });
  }

  save() {
    this.pageForm.setValue({
      name: this.pageForm.value.name,
      blocks: this.page.blocks,
    });
    this.saveMode.emit({ fg: this.pageForm, id: this.page._id });
  }

  columns: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  rows: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];
}
