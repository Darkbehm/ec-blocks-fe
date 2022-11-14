import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresLandingComponent } from './stores-landing.component';

describe('StoresComponent', () => {
  let component: StoresLandingComponent;
  let fixture: ComponentFixture<StoresLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoresLandingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StoresLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
