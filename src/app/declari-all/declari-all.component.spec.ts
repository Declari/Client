import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclariAllComponent } from './declari-all.component';

describe('DeclariAllComponent', () => {
  let component: DeclariAllComponent;
  let fixture: ComponentFixture<DeclariAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclariAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeclariAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
