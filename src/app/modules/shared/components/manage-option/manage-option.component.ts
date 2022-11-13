import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Plan } from '../../../admin/interfaces/plan.interface';
import { Template } from '../../../admin/interfaces/template.interface';

@Component({
  selector: 'app-manage-option',
  templateUrl: './manage-option.component.html',
  styleUrls: ['./manage-option.component.scss'],
})
export class ManageOptionComponent {
  @Input() option!: Plan | Template;
  @Output() optionSelected: EventEmitter<Plan | Template> = new EventEmitter<
    Plan | Template
  >();

  sendPlan(option: Plan | Template) {
    this.optionSelected.emit(option);
  }
}
