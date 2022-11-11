import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-option',
  templateUrl: './add-option.component.html',
  styleUrls: ['./add-option.component.scss'],
})
export class AddOptionComponent {
  @Input() name!: string;

  @Output() addState: EventEmitter<boolean> = new EventEmitter<boolean>();

  sendAddState() {
    console.log('clicked!!!');
    this.addState.emit(true);
  }
}
