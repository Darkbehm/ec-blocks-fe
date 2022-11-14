import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-card-form-login',
  templateUrl: './card-form-login.component.html',
  styleUrls: ['./card-form-login.component.scss'],
})
export class CardFormLoginComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  loginForm: FormGroup = this.fb.group({
    name: [''],
    description: [''],
  });
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
}
