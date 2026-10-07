import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilderDemo } from './form-builder-demo';

describe('FormBuilderDemo', () => {
  let component: FormBuilderDemo;
  let fixture: ComponentFixture<FormBuilderDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormBuilderDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(FormBuilderDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
