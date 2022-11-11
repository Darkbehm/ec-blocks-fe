import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Plan } from 'src/app/modules/admin/interfaces/plan.interface';
import { Template } from '../../../admin/interfaces/template.interface';

@Component({
  selector: 'app-manage-section',
  templateUrl: './manage-section.component.html',
  styleUrls: ['./manage-section.component.scss'],
})
export class ManageSectionComponent {
  @Input() title!: string;
  @Input() name!: string;
  @Input() options!: Array<Plan | Template>;

  @Output() optionSelected: EventEmitter<Plan | Template> = new EventEmitter<
    Plan | Template
  >();
  @Output() addState: EventEmitter<boolean> = new EventEmitter<boolean>();

  getOption(option: Plan | Template) {
    this.optionSelected.emit(option);
  }

  getAddState(value: boolean) {
    this.addState.emit(value);
  }
}
