import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Plan } from 'src/app/core/interfaces/plan.interface';
import { Page } from 'src/app/core/interfaces/page.interface';
import { Product } from 'src/app/core/interfaces/product.interface';
import { Template } from 'src/app/core/interfaces/template.interface';
import { Category } from 'src/app/core/interfaces/category.interface';

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
  @Output() deleteMode: EventEmitter<any> = new EventEmitter<any>();

  getOption(option: Plan | Template | Product | Category | Page) {
    this.optionSelected.emit(option);
  }

  getAddState(value: boolean) {
    this.addState.emit(value);
  }

  getDeleteMode(value: any) {
    this.deleteMode.emit(value);
  }
}
