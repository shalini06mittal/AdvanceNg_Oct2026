import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmpReactiveForm } from './emp-reactive-form';

describe('EmpReactiveForm', () => {
  let component: EmpReactiveForm;
  let fixture: ComponentFixture<EmpReactiveForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpReactiveForm],
    }).compileComponents();

    fixture = TestBed.createComponent(EmpReactiveForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
