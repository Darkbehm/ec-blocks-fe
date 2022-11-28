import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { USER_TYPES } from 'src/app/core/enums';
import { AuthService } from 'src/app/core/services/auth.service';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';
@Component({
  selector: 'app-card-form-login',
  templateUrl: './card-form-login.component.html',
  styleUrls: ['./card-form-login.component.scss'],
})
export class CardFormLoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private tokenStorage: TokenStorageService,
  ) {}

  loginForm: FormGroup;
  loading = false;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
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
    });
  }
  navigate(type: USER_TYPES) {
    const routes = {
      [USER_TYPES.admin]: '/admin',
      [USER_TYPES.buyer]: '/stores',
      [USER_TYPES.seller]: '/business',
      [USER_TYPES.unknown]: '/login',
    };
    this.router.navigate([routes[type]]);
  }

  submitFunction() {
    if (!this.loginForm.valid) return;
    this.loading = true;
    const { email, password } = this.loginForm.value;
    this.authService.login({ email, password }).subscribe({
      next: (res) => {
        this.tokenStorage.saveToken(res.token);
        this.tokenStorage.saveUser(res.user);
        this.navigate(res.user.type);
      },
      error: (err) => {
        window.location.reload();
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
