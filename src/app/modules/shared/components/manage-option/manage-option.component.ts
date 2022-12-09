import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from 'src/app/core/interfaces/category.interface';
import { Plan } from 'src/app/core/interfaces/plan.interface';
import { Product } from 'src/app/core/interfaces/product.interface';
import { Template } from 'src/app/core/interfaces/template.interface';
import { Page } from '../../../../core/interfaces/page.interface';

@Component({
  selector: 'app-manage-option',
  templateUrl: './manage-option.component.html',
  styleUrls: ['./manage-option.component.scss'],
})
export class ManageOptionComponent {
  @Input() option!: any;
  @Output() optionSelected: EventEmitter<any> = new EventEmitter<any>();
  @Output() sendDeleteMode: EventEmitter<any> = new EventEmitter<any>();

  sendPlan(option: Plan | Template | Product | Category | Page) {
    this.optionSelected.emit(option);
  }

  deleteMode() {
    this.sendDeleteMode.emit({ deleteState: true, option: this.option });
  }
}
