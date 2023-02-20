import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDFHospitalPageComponent } from './tdfhospital-page.component';

describe('TDFHospitalPageComponent', () => {
  let component: TDFHospitalPageComponent;
  let fixture: ComponentFixture<TDFHospitalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TDFHospitalPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TDFHospitalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
