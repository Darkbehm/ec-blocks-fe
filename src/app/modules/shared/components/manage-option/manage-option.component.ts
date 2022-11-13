import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Plan } from '../../../admin/interfaces/plan.interface';
import { Template } from '../../../admin/interfaces/template.interface';
import { Product } from '../../../business/interfaces/product.interface';
import { Category } from '../../../business/interfaces/category.interface';

@Component({
  selector: 'app-manage-option',
  templateUrl: './manage-option.component.html',
  styleUrls: ['./manage-option.component.scss'],
})
export class ManageOptionComponent {
  @Input() option!: Plan | Template | Product | Category;
  @Output() optionSelected: EventEmitter<Plan | Template | Product | Category> =
    new EventEmitter<Plan | Template | Product | Category>();

  sendPlan(option: Plan | Template | Product | Category) {
    this.optionSelected.emit(option);
  }
}
