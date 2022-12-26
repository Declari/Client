import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpPhysiqueComponent } from './sign-up-physique.component';

describe('SignUpPhysiqueComponent', () => {
  let component: SignUpPhysiqueComponent;
  let fixture: ComponentFixture<SignUpPhysiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpPhysiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpPhysiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
