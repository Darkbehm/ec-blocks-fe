import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { USER_TYPES } from 'src/app/core/enums';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-card-form-register',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.scss'],
})
export class CardFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {}

  registerForm: FormGroup;
  loading = false;
  submitFunction() {
    if (!this.registerForm.valid) return;
    this.loading = true;
    const { email, isBuyer, name, password } = this.registerForm.value;
    const type = isBuyer ? USER_TYPES.buyer : USER_TYPES.seller;

    this.authService.register({ name, email, password, type }).subscribe({
      next: () => {
        this.router.navigate(['login']);
      },
      error: (err) => {
        window.location.reload();
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: new FormControl('', [
        RxwebValidators.required(),
        RxwebValidators.minLength({ value: 3 }),
        RxwebValidators.maxLength({ value: 64 }),
      ]),
      email: new FormControl('', [
        RxwebValidators.required(),
        RxwebValidators.email(),
      ]),
      password: new FormControl('', [
        RxwebValidators.required(),
        RxwebValidators.password({
          validation: {
            minLength: 8,
            maxLength: 32,
            digit: true,
            specialCharacter: true,
          },
        }),
      ]),
      confirmPassword: new FormControl('', [
        RxwebValidators.required(),
        RxwebValidators.compare({ fieldName: 'password' }),
      ]),
      acceptTos: new FormControl(false, [RxwebValidators.requiredTrue()]),
      isBuyer: new FormControl(false),
    });
  }
}
