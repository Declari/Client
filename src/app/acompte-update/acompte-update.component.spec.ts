import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompteUpdateComponent } from './acompte-update.component';

describe('AcompteUpdateComponent', () => {
  let component: AcompteUpdateComponent;
  let fixture: ComponentFixture<AcompteUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcompteUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcompteUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
