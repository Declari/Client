import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompteDetailComponent } from './acompte-detail.component';

describe('AcompteDetailComponent', () => {
  let component: AcompteDetailComponent;
  let fixture: ComponentFixture<AcompteDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcompteDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcompteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
