import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompteAllComponent } from './acompte-all.component';

describe('AcompteAllComponent', () => {
  let component: AcompteAllComponent;
  let fixture: ComponentFixture<AcompteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcompteAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcompteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
