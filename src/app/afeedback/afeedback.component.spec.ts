import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfeedbackComponent } from './afeedback.component';

describe('AfeedbackComponent', () => {
  let component: AfeedbackComponent;
  let fixture: ComponentFixture<AfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
