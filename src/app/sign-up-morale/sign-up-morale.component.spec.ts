import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpMoraleComponent } from './sign-up-morale.component';

describe('SignUpMoraleComponent', () => {
  let component: SignUpMoraleComponent;
  let fixture: ComponentFixture<SignUpMoraleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpMoraleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpMoraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
