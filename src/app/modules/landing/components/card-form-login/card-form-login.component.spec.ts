import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFormLoginComponent } from './card-form-login.component';

describe('CardFormLoginComponent', () => {
  let component: CardFormLoginComponent;
  let fixture: ComponentFixture<CardFormLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardFormLoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardFormLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
