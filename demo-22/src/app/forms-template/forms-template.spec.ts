import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsTemplate } from './forms-template';

describe('FormsTemplate', () => {
  let component: FormsTemplate;
  let fixture: ComponentFixture<FormsTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsTemplate],
    }).compileComponents();

    fixture = TestBed.createComponent(FormsTemplate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
