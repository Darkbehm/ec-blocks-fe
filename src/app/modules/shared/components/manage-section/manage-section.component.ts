import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Plan } from 'src/app/modules/admin/interfaces/plan.interface';
import { Page } from 'src/app/modules/business/interfaces/page.interface';
import { Product } from 'src/app/modules/business/interfaces/product.interface';
import { Template } from '../../../admin/interfaces/template.interface';
import { Category } from '../../../business/interfaces/category.interface';

@Component({
  selector: 'app-manage-section',
  templateUrl: './manage-section.component.html',
  styleUrls: ['./manage-section.component.scss'],
})
export class ManageSectionComponent {
  @Input() title!: string;
  @Input() name!: string;
  @Input() css: string = '';
  @Input() options!: Array<Plan | Template | Product | Category | Page>;

  @Output() optionSelected: EventEmitter<
    Plan | Template | Product | Category | Page
  > = new EventEmitter<Plan | Template | Product | Category | Page>();
  @Output() addState: EventEmitter<boolean> = new EventEmitter<boolean>();

  getOption(option: Plan | Template | Product | Category | Page) {
    this.optionSelected.emit(option);
  }

  getAddState(value: boolean) {
    this.addState.emit(value);
  }
}
