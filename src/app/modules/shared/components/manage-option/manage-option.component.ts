import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from 'src/app/core/interfaces/category.interface';
import { Plan } from 'src/app/core/interfaces/plan.interface';
import { Product } from 'src/app/core/interfaces/product.interface';
import { Template } from 'src/app/core/interfaces/template.interface';

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
