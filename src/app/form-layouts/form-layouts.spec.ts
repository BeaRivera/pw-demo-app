import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLayouts } from './form-layouts';

describe('FormLayouts', () => {
  let component: FormLayouts;
  let fixture: ComponentFixture<FormLayouts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormLayouts],
    }).compileComponents();

    fixture = TestBed.createComponent(FormLayouts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
