import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclariComponent } from './declari.component';

describe('DeclariComponent', () => {
  let component: DeclariComponent;
  let fixture: ComponentFixture<DeclariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeclariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
